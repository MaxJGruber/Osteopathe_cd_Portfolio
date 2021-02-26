import axios from "axios";
const service = axios.create({
  baseURL: "http://localhost:8080",
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