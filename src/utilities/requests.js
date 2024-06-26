import axios from "axios";

// GERS ALL EMAILS
export const getEmails = async (limit) => {
  try {
    const response = await axios.get("http://localhost:3001/email", {
      params: {limit},
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

// CREATES AN EMAIL
export const addEmail = async (payload) => {
  try {
    const response = await axios.post("http://localhost:3001/email/add", {
      payload,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

// DELETES AN EMAIL
export const removeEmail = async (id) => {
  try {
    const response = await axios.delete(`http://localhost:3001/email/${id}`);
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

// EDITS AN EMAIL
export const updateEmail = async (id, payload) => {
  try {
    const response = await axios.patch(`http://localhost:3001/email/${id}`, {
      payload,
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

// GETS OAUTH URL
export const getUrl = async () => {
  try {
    const response = await axios.get("http://localhost:3001/login");
    console.log(response.data);
    return response.data.authUrl;
  } catch (error) {
    console.error(error);
  }
};
