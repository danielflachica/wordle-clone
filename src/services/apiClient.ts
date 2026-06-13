import axios, { CanceledError } from "axios";

export default axios.create({
  baseURL: "https://random-words-api.kushcreates.com/api",
});

export { CanceledError };
