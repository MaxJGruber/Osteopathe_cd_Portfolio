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
  },

  getTimeTable(endpoint) {
    return service.get(endpoint).then((res) => res.data).catch(errorHandler)
  },

  createTimeSlot(endpoint, data) {
    return service.post(endpoint, data).then(res => res.data).catch(errorHandler)
  },

  editTimeSlot(endpoint, data) {
    return service.patch(endpoint, data).then(res => res.data).catch(errorHandler)
  },

  deleteTimeSlot(endpoint) {
    return service.delete(endpoint).then(res => res.data).catch(errorHandler)
  },

  getMessages(endpoint) {
    return service.get(endpoint).then((res) => res.data).catch(errorHandler)
  },

  getOneMessage(endpoint) {
    return service.get(endpoint).then((res) => res.data).catch(errorHandler)
  },

  editMessage(endpoint, data) {
    return service.patch(endpoint, data).then(res => res.data).catch(errorHandler)
  },

  adminSignin(endpoint, data) {
    return service.post(endpoint, data).then(res => res.data).catch(errorHandler)
  }
}