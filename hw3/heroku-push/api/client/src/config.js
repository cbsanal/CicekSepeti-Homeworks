import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: "https://ciceksepeti-bootcamp-hw3.herokuapp.com/api/card/",
});
