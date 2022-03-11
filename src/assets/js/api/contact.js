import axios from "axios";
import { apiUrl } from "./";

export default {
  async create(params) {
    return axios.post(`${apiUrl}/newsletter`, params);
  }
};
