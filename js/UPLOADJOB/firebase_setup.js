import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.2/firebase-app.js";

import {
  getFirestore,
  collection,
  getDocs,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  getDoc,
  updateDoc,
} from "https://www.gstatic.com/firebasejs/9.6.2/firebase-firestore.js";

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALRmvsoS0iH1kIgli0t8vVSO4VkatNiSE",
  authDomain: "cloudtask-auth.firebaseapp.com",
  databaseURL: "https://cloudtask-auth-default-rtdb.firebaseio.com",
  projectId: "cloudtask-auth",
  storageBucket: "cloudtask-auth.appspot.com",
  messagingSenderId: "977316788195",
  appId: "1:977316788195:web:19437eca5d6618ee69d2d6",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore();

export const saveTask = (
  jobName,
  description,
  availability,
  experience,
  min_sal,
  max_sal,
  location,
  skills,
  applyEmail
) =>
  addDoc(collection(db, "jobs"), {
    jobName,
    description,
    availability,
    experience,
    min_sal,
    max_sal,
    location,
    skills,
    applyEmail,
  });

export const onGetTasks = () => onSnapshot(collection(db, "jobs"));

export const deleteTask = (id) => deleteDoc(doc(db, "jobs", id));

export const getTask = (id) => getDoc(doc(db, "jobs", id));

export const updateTask = (id) => updateDoc(doc(db, "jobs", id));

export const getTasks = () => getDocs(collection(db, "jobs"));
