//import "server-only";

import admin from "firebase-admin";
import { getApps } from "firebase-admin/app";
import config from "@/config";

const serviceAccount = JSON.parse(config.firebase.serviceAccountKey as string);

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

const adminSDK = admin;
const adminDb = admin.firestore();

export { adminSDK, adminDb };
