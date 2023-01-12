import ax from "axios";
import { API_BASE_PATH } from "./config";

export const axios = ax.create({
  baseURL: API_BASE_PATH,
});
