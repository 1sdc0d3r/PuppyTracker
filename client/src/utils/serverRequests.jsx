import axios from "axios";
const api_url = "http://localhost:5000/api";

export { addLitter };

function addLitter(litter) {
  axios
    .post(`${api_url}/litter`, litter)
    .then((res) => console.log({ res }))
    .catch((err) => console.log(err.response.data.message));
}
