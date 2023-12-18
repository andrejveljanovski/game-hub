import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "aff67d8d905f44daa516b2e320d0bb08",
  },
});
