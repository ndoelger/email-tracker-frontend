// import axios from "axios";

import axios from "axios";
// import { dateCoverter } from "./dateConverter";
// axios = require("axios");

export const getEmails = async () => {
  try {
    const response = await axios.get("http://localhost:3001/dashboard");
    return response.data;
  } catch (error) {
    console.error("Error:", error.response ? error.response.data : error);
  }
};

export const getHubspotLoginUrl = async () => {
  const response = await axios.get("http://localhost:3001/login");
  console.log(response.data); // Perform the redirect on the client side
  return response.data.authUrl;
};

export const login = async () => {
  try {
    const response = await axios.get("http://localhost:3001/login");
    console.log(response);
  } catch (error) {
    console.error(
      "Error: ",
      error.response ? error.response.data : error.message
    );
  }
};

// getUrl

// export const getContacts = async (numContacts = 1, after) => {
//     try {
//       const response = await axios.get(
//         `/crm/v3/objects/contacts/?limit=${numContacts}&properties=email,firstname,lastname,jobtitle,company&${after ? `after=${after}` : ''}`,
//         {
//           headers: {
//             Authorization: `Bearer ${token}`,
//             "Content-Type": "application/json",
//           },
//         }
//       );
//       // console.log(response);
//       const contacts = response.data.results.map((contact) => {
//         return {
//           id: contact.id,
//           firstname: contact.properties.firstname, // Assuming 'firstname' is correctly populated
//           lastname: contact.properties.lastname, // Assuming 'firstname' is correctly populated
//           email: contact.properties.email,
//           createdAt: dateCoverter(contact.createdAt),
//           company: contact.properties.company,
//           jobtitle: contact.properties.jobtitle,
//         };
//       });
//       if (response.data.paging) contacts.after = response.data.paging.next.after;
//       // console.log(contacts);
//       return contacts;
//     } catch (error) {
//       console.error("Error:", error.response.data); // Handle errors here
//     }
//   };
