const axios = require("axios");
const asyncHandler = require("../middleware/async");
const { API_BASE_URL, API_KEY, APP_SECRET } = require("./url");

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// request interceptor to add the auth token header to requests
// api.interceptors.request.use(
//   async (config) => {
//     // Do something before request is sent
//     const formData = {
//       apiKey: API_KEY,
//       appSecret: APP_SECRET,
//     };

//     const { data } = await axios.post(`${API_BASE_URL}/auth/token`, formData);
//     let token = data.data[0]?.accessToken;

//     config.headers["Authorization"] = `Bearer ${token}`;
//     return config;
//   },
//   (error) => {
//     Promise.reject(error);
//   }
// );

module.exports = api;
