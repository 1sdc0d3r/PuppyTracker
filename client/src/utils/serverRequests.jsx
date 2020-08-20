import axios from "axios";
const api_url = "http://localhost:5000/api";

export { postLitter };

function postLitter(litter) {
  axios
    .post(`${api_url}/litter`, litter)
    .then((res) => res)
    .catch((err) => console.log(err.response.data.message));
}
