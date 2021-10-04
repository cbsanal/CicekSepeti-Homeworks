import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://cicekhw3.herokuapp.com/api/card/",
});
