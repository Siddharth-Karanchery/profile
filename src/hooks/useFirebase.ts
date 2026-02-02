import firebaseServices from "@/services/firebaseServices";

const useFirebase = () => {
  // Firebase initialization logic here

  let isConnected = false;
  const connect = async () => {
    if (!isConnected) {
      await firebaseServices.connectToDB();
      isConnected = true;
    }
  };

  const getSkillsData = async () => {
    if (!isConnected) {
      await connect();
    }
    let result = await firebaseServices.getSkillsData();
    return result;
  };

  const getTestimonialsData = async () => {
    if (!isConnected) {
      await connect();
    }
    let result = await firebaseServices.getTestimonialsData();
    return result;
  };

  const getExperienceData = async () => {
    if (!isConnected) {
      await connect();
    }
    let result = await firebaseServices.getExperienceData();
    return result;
  };

  return { connect, getSkillsData, getTestimonialsData, getExperienceData };
};
export default useFirebase;
