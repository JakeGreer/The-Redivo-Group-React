import axios from "axios";

export default axios.create({
  baseURL: "/api/user/search",
  method: "post"
});