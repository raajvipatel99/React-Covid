import axios from "axios";
//const KEY = "AIzaSyBG557-Im5qJ_KX63kQpo9a0mWRv_Q-qIM";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    /*part: "snippet",
    maxResults: 5,
    key: KEY,*/
  },
});
