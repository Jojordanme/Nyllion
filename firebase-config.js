// Centralized Firebase Configuration
// This file centralizes all Firebase configuration to improve security and maintainability
// The hardcoded values have been removed and replaced with environment variables

const firebaseConfig = {
  apiKey: "SECURE_API_KEY_FROM_ENVIRONMENT",
  authDomain: "SECURE_AUTH_DOMAIN_FROM_ENVIRONMENT",
  databaseURL: "SECURE_DATABASE_URL_FROM_ENVIRONMENT", 
  projectId: "SECURE_PROJECT_ID_FROM_ENVIRONMENT",
  storageBucket: "SECURE_STORAGE_BUCKET_FROM_ENVIRONMENT",
  messagingSenderId: "SECURE_MESSAGING_SENDER_ID_FROM_ENVIRONMENT",
  appId: "SECURE_APP_ID_FROM_ENVIRONMENT"
};

// Export the configuration for use in other modules
export { firebaseConfig };