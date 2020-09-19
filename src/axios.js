import axios from "axios";

const instance = axios.create({
  baseURL: "https://tinderclone5595.herokuapp.com",
});
export default instance;
