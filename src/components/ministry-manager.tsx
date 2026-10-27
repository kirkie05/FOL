"use client";

import { useState, type FormEvent } from "react";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { db, firebaseConfigured } from "@/lib/firebase/client";
import { ministrySchema } from "@/lib/schemas";

export function MinistryManager() {
  const [status, setStatus] = useState("");
  const [busy, setBusy] = useState(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!db) {
      setStatus("Firebase must be configured before ministries can be published.");
      return;
    }

    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form));
    const parsed = ministrySchema.safeParse({ ...values, image: values.image || "/media/congregation-worship-1.webp" });
    if (!parsed.success) {
      setStatus(parsed.error.issues[0]?.message ?? "Check the ministry details and try again.");
      return;
    }

    setBusy(true);
    try {
      await setDoc(doc(db, "ministries", parsed.data.slug), {
        ...parsed.data,
        leader: parsed.data.leader || null,
        meeting: parsed.data.meeting || null,
        updatedAt: serverTimestamp(),
      }, { merge: true });
      setStatus(parsed.data.status === "published" ? "Ministry published to the public directory." : "Ministry saved as a draft.");
      form.reset();
    } catch (error) {
      setStatus(error instanceof Error ? error.message : "Unable to save the ministry.");
    } finally {
      setBusy(false);
    }
  }

  return <div className="admin-editorial-grid">
    <div><p className="eyebrow">Public ministry directory</p><h2>Create or update a ministry</h2><p>Published records are merged into the public Ministries page and receive their own detail page automatically. Firestore rules restrict changes to approved administrative roles.</p></div>
    <form className="form-card admin-form" onSubmit={submit}>
      <div className="form-grid"><label>Ministry name<input name="title" required /></label><label>URL slug<input name="slug" required pattern="[a-z0-9]+(?:-[a-z0-9]+)*" placeholder="young-adults" /></label></div>
      <label>Short description<textarea name="description" required minLength={20} maxLength={240} /></label>
      <label>Full description<textarea name="about" required minLength={40} maxLength={1200} /></label>
      <div className="form-grid"><label>Leader<input name="leader" placeholder="Add only when approved" /></label><label>Meeting details<input name="meeting" placeholder="Add only confirmed information" /></label></div>
      <label>Image path<input name="image" defaultValue="/media/congregation-worship-1.webp" /></label>
      <label>Status<select name="status" defaultValue="published"><option value="published">Published</option><option value="draft">Draft</option></select></label>
      <button className="button" type="submit" disabled={busy}>{busy ? "Saving…" : "Save ministry"}</button>
      <p role="status">{status || (!firebaseConfigured ? "Firebase configuration is required to save records." : "")}</p>
    </form>
  </div>;
}
