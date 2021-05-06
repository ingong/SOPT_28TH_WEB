import axios from "axios";

export const getUserData = async (id) => {
  //   const instance = axios.create({
  //     baseURL: "https://api.github.com/users/",
  //   });
  try {
    const { data } = await axios.get("https://api.github.com/users/" + id);
    console.log("Suceess : Get user Data", data);
    return data;
  } catch (e) {
    console.log("Fail : Get user Data");
    return null;
  }
};
