import axios from "axios";
// Base url for requesting movie database
const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});
export default instance;
