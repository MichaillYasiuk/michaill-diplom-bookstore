import { getAuth } from "firebase/app";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_Key,
  authDomain: process.env.REACT_APP_Aauth_Domain,
  projectId: process.env.REACT_APP_Project_Id,
  storageBucket: process.env.REACT_APP_Storage_Bucket,
  messagingSenderId: process.env.REACT_APP_Messaging_SenderId,
  appId: process.env.REACT_APP_App_Id,
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
