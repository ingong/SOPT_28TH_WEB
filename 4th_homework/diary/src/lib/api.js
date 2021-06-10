import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000",
  timeout: 1000,
});

export const getCardData = async () => {
  try {
    const data = await instance.get("/posts");
    console.log("Success");
    console.log(data);
    return data.data.data;
  } catch (e) {
    console.log(e);
    return null;
  }
};

export const createCardData = async (userData) => {
  try {
    const data = await instance.post("/posts", {
      data: userData,
    });
    console.log("[SUCCESS] POST card data");
    return data.data.data;
  } catch (e) {
    console.log("[FAIL] POST card data");
    return null;
  }
};
