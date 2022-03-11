import axios from "axios";
import { apiUrl } from "./";

export default {
  async fetch(params) {
    return axios.get(`${apiUrl}/articles`, { params });
  }
};
