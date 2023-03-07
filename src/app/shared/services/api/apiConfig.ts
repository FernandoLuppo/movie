import axios from "axios";

const productionURL = "https://luppotw-movies-api.onrender.com";
const localURL = "http://localhost:3001";

export const Api = () => {
  return axios.create({
    baseURL: productionURL,
  });
};
