import axios from "axios";

export default axios.create({
  baseURL: "http://192.168.238.176:8082/api",
  headers: {
    "Content-type": "application/json"
  }
});