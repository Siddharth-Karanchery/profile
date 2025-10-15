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

  return { connect, getSkillsData };
};
export default useFirebase;
