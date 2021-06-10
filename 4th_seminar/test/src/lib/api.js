import axios from "axios";

export const getUserData = async () => {
  try {
    const data = axios.get("https://localhost:3001/posts");
    console.log("Success");
    return data.data;
  } catch (e) {
    console.log("Fail");
    return null;
  }
};
