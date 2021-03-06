// API handler file to send from server to front the image URLs in folder on cloudinary

import axios from "axios";
const service = axios.create({
  baseURL: process.env.VUE_APP_BACKEND_URL,
  withCredentials: true,
});

function errorHandler(err) {
  if (err.response.data) {
    console.log(err.response && err.response.data);
    throw err;
  }
  throw err;
}

export default {
  service,

  // GET ALL IMAGES FROM CLOUDINARY FOLDER
  getPicUrls(endpoint) {
    return service
      .get(endpoint)
      .then((res) => res.data)
      .catch(errorHandler);
  }
}