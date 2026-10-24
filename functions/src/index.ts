import { createHmac, timingSafeEqual } from "node:crypto";
import { initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { FieldValue, getFirestore } from "firebase-admin/firestore";
import { onCall, onRequest, HttpsError } from "firebase-functions/v2/https";
import { z } from "zod";

initializeApp(); const db=getFirestore();
const adminRoles=new Set(["superAdmin","churchAdmin","pastor"]);
function assertAdmin(auth: { token: object } | undefined){ const role=(auth?.token as Record<string,unknown> | undefined)?.role; if(typeof role!=="string" || !adminRoles.has(role)) throw new HttpsError("permission-denied","Administrator role required."); }

export const approveMember=onCall(async request=>{assertAdmin(request.auth);const input=z.object({uid:z.string().min(1),status:z.enum(["active","inactive","transferred","archived"])}).parse(request.data);await getAuth().setCustomUserClaims(input.uid,{role:input.status==="active"?"member":"pendingMember",memberStatus:input.status});await db.doc(`memberships/${input.uid}`).set({status:input.status,updatedAt:FieldValue.serverTimestamp(),updatedBy:request.auth!.uid},{merge:true});await db.collection("auditLogs").add({action:"membership.statusChanged",targetId:input.uid,actorId:request.auth!.uid,createdAt:FieldValue.serverTimestamp()});return {ok:true};});

export const recordAttendance=onCall(async request=>{if(!request.auth)throw new HttpsError("unauthenticated","Sign in required.");const input=z.object({serviceInstanceId:z.string().min(1),subjectId:z.string().min(1),token:z.string().min(20)}).parse(request.data);const id=`${input.serviceInstanceId}_${input.subjectId}`;await db.runTransaction(async tx=>{const ref=db.doc(`attendance/${id}`);if((await tx.get(ref)).exists)throw new HttpsError("already-exists","Already checked in.");tx.create(ref,{...input,checkedInAt:FieldValue.serverTimestamp(),checkedInBy:request.auth!.uid});});return {ok:true};});

export const paystackWebhook=onRequest(async(req,res)=>{const secret=process.env.PAYSTACK_WEBHOOK_SECRET;if(!secret){res.status(503).send("Payments disabled");return;}const signature=String(req.header("x-paystack-signature")??"");const digest=createHmac("sha512",secret).update(req.rawBody).digest("hex");if(signature.length!==digest.length||!timingSafeEqual(Buffer.from(signature),Buffer.from(digest))){res.status(401).send("Invalid signature");return;}const event=req.body as {event?:string;data?:{reference?:string;status?:string;amount?:number}};const reference=event.data?.reference;if(!reference){res.status(400).send("Missing reference");return;}await db.runTransaction(async tx=>{const ref=db.doc(`paymentTransactions/${reference}`);const snap=await tx.get(ref);if(snap.get("webhookProcessed"))return;tx.set(ref,{provider:"paystack",status:event.data?.status,event:event.event,amount:event.data?.amount,webhookProcessed:true,verifiedAt:FieldValue.serverTimestamp()},{merge:true});});res.status(200).send("ok");});
