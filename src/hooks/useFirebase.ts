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
    const result = await firebaseServices.getSkillsData();
    return result;
  };

  const getTestimonialsData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getTestimonialsData();
    return result;
  };

  const getExperienceData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getExperienceData();
    return result;
  };

  const getUIDesignData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getUIDesignData();
    return result;
  };

  const getWebDevData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getWebDevData();
    return result;
  };

  const getPaintingsData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getPaintingsData();
    return result;
  };

  const getSketchesData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getSketchesData();
    return result;
  };

  const getDigitalArtInkData = async () => {
    if (!isConnected) {
      await connect();
    }
    const result = await firebaseServices.getDigitalArtInkData();
    return result;
  };

  return {
    connect,
    getSkillsData,
    getTestimonialsData,
    getExperienceData,
    getUIDesignData,
    getWebDevData,
    getPaintingsData,
    getSketchesData,
    getDigitalArtInkData,
  };
};
export default useFirebase;
