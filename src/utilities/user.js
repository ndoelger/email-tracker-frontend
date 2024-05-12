// import axios from "axios";

// export const login = async (params) => {
//   const params = new URLSearchParams({
//     grant_type: "authorization_code",
//     client_id: CLIENT_ID,
//     client_secret: CLIENT_SECRET,
//     redirect_uri: REDIRECT_URI,
//     code: req.query.code,
//   });

//   try {
//     const response = await axios.post(
//       "https://api.hubapi.com/oauth/v1/token",
//       params.toString(), // Converts the parameters to URL-encoded string
//       {
//         headers: {
//           "Content-Type": "application/x-www-form-urlencoded",
//         },
//       }
//     );

//     tokens = response.data;

//     accessToken = tokens.access_token;
//     refreshToken = tokens.refresh_token;

//     localStorage.set("AccessToken", accessToken);
//   } catch (error) {
//     console.error("Error:", error.response ? error.response.data : error);
//     res.status(500).send("Failed to retrieve access token");
//   }
// };