// firebaseAdmin.js
import admin from "firebase-admin";
import serviceAccount from "./serviceAccountKey.js"; // Use JSON assertion

// Log to debug
console.log("Project ID:", process.env.FIREBASE_PROJECT_ID);

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

export const messaging = admin.messaging();
