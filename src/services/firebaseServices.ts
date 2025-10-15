import { Skill } from "@/types/skill";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // if using Firestore
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCX61YvbT82mZ7V6jmM13PWaulVDExzRfo",
  authDomain: "profile2-c859b.firebaseapp.com",
  projectId: "profile2-c859b",
  storageBucket: "profile2-c859b.firebasestorage.app",
  messagingSenderId: "180900098233",
  appId: "1:180900098233:web:284db0bf8bfd132ac7eb68",
  measurementId: "G-R4ZKZ44259",
};

class firebaseServices {
  private db: any;
  // Add your Firebase service methods here

  connectToDB() {
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);

    // Initialize Firestore or Realtime Database
    const db = getFirestore(app);

    this.db = db;
    return db;
  }

  async getSkillsData() {
    // Example method to fetch skills data from Firestore
    if (!this.db) {
      throw new Error("Database not initialized. Call connectToDB first.");
    }
    // Implement your data fetching logic here
    try {
      const querySnapshot = await getDocs(collection(this.db, "skillsData"));
      const skillList: Skill[] = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return skillList;
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  }
}

export default new firebaseServices();
