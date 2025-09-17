// Centralized Firebase Configuration
// This file centralizes all Firebase configuration to improve security and maintainability

const firebaseConfig = {
  apiKey: window.FIREBASE_API_KEY || "AIzaSyAKGaSBlKuGY3WTZXgA5TBuTD6FOXQDcGk",
  authDomain: window.FIREBASE_AUTH_DOMAIN || "nyllion-2f95f.firebaseapp.com",
  databaseURL: window.FIREBASE_DATABASE_URL || "https://nyllion-2f95f-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: window.FIREBASE_PROJECT_ID || "nyllion-2f95f",
  storageBucket: window.FIREBASE_STORAGE_BUCKET || "nyllion-2f95f.appspot.com",
  messagingSenderId: window.FIREBASE_MESSAGING_SENDER_ID || "440220527602",
  appId: window.FIREBASE_APP_ID || "1:440220527602:web:8ad8398b24bd72a65ad96b"
};

// Export the configuration for use in other modules
export { firebaseConfig };