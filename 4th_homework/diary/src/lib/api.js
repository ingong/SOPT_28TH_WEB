import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:4000",
  timeout: 1000,
});

export const getCardData = async () => {
  try {
    const data = await instance.get("/posts");
    console.log("Success");
    return data.data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};
