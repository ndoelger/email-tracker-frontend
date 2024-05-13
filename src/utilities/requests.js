import axios from "axios";

export const getEmails = async () => {
  try {
    const response = await axios.get("http://localhost:3001/email");
    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export const addEmail = async (properties) => {
  try {
    const response = await axios.post("http://localhost:3001/email/add", {
      properties,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export const getUrl = async () => {
  try {
    const response = await axios.get("http://localhost:3001/login");
    console.log(response.data);
    return response.data.authUrl;
  } catch (error) {
    console.error(error);
  }
};
