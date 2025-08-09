import axios from 'axios';
axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
const myApiKey = "secret-api-key-for-every-request";
axios.defaults.headers.common["header-name"] = myApiKey;

const searchParams = new URLSearchParams({
    _limit: 5,
    _sort: "name",
})

axios,get(`https://jsonplaceholder.typicode.com/users?${searchParams}`, {
    params: {
        _limit: 7,
        _sort: "name",
    }
})

.then(response => console.log(response))
.catch(error => console.log(error));

fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => {
    // Response handling
  })
  .then(data => {
    // Data handling
  })
  .catch(error => {
    // Error handling
  });