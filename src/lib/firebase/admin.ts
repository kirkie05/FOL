import { applicationDefault, cert, getApps, initializeApp } from "firebase-admin/app";
import { getAuth } from "firebase-admin/auth";
import { getFirestore } from "firebase-admin/firestore";

const projectId=process.env.FIREBASE_ADMIN_PROJECT_ID;
const clientEmail=process.env.FIREBASE_ADMIN_CLIENT_EMAIL;
const privateKey=process.env.FIREBASE_ADMIN_PRIVATE_KEY?.replace(/\\n/g,"\n");
const configured=Boolean(projectId && (clientEmail&&privateKey || process.env.K_SERVICE));
const app=configured ? (getApps()[0] ?? initializeApp({credential:clientEmail&&privateKey?cert({projectId,clientEmail,privateKey}):applicationDefault(),projectId})) : null;
export const adminConfigured=configured;
export const adminAuth=app?getAuth(app):null;
export const adminDb=app?getFirestore(app):null;
