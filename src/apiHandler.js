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

  // AUTHENTICATION API HANDLERS
  getPicUrls(endpoint) {
    return service
      .get(endpoint)
      .then((res) => res.data)
      .catch(errorHandler);
  }
}