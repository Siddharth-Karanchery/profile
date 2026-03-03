import { Skill } from "@/types/skill";
import { initializeApp } from "firebase/app";
import { Firestore, getFirestore } from "firebase/firestore"; // if using Firestore
import { collection, getDocs, query, where } from "firebase/firestore";

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
  private db: Firestore | null = null;
  // Add your Firebase service methods here

  private ensureDB() {
    if (!this.db) {
      throw new Error("Database not initialized. Call connectToDB first.");
    }
  }

  private async getCollectionData(collectionName: string) {
    this.ensureDB();
    const querySnapshot = await getDocs(collection(this.db, collectionName));
    return querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
  }

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
    this.ensureDB();
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

  async getTestimonialsData() {
    this.ensureDB();
    try {
      const querySnapshot = await getDocs(collection(this.db, "Testimonials"));
      const testimonialsList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return testimonialsList;
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  }

  async getExperienceData() {
    this.ensureDB();
    try {
      const experienceQuery = query(
        collection(this.db, "Experience"),
        where("isDisplay", "==", true),
      );
      const querySnapshot = await getDocs(experienceQuery);
      const experienceList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      return experienceList;
    } catch (error) {
      console.error("Error fetching experience:", error);
    }
  }

  async getUIDesignData() {
    try {
      return await this.getCollectionData("UI");
    } catch (error) {
      console.error("Error fetching UI data:", error);
    }
  }

  async getWebDevData() {
    try {
      return await this.getCollectionData("WebDev");
    } catch (error) {
      console.error("Error fetching WebDev data:", error);
    }
  }

  async getPaintingsData() {
    try {
      return await this.getCollectionData("Paintings");
    } catch (error) {
      console.error("Error fetching Paintings data:", error);
    }
  }

  async getSketchesData() {
    try {
      return await this.getCollectionData("Sketches");
    } catch (error) {
      console.error("Error fetching Sketches data:", error);
    }
  }

  async getDigitalArtInkData() {
    try {
      return await this.getCollectionData("Ink");
    } catch (error) {
      console.error("Error fetching DigitalArtInk data:", error);
    }
  }
}

export default new firebaseServices();
