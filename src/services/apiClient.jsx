import axios from "axios";

const apiClient = axios.create({
    baseURL:"https://google-api31.p.rapidapi.com/",
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': '41a0ddc1fbmsh0abb74ca565468dp1a5876jsnbfbe79fc22cf',
      'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
    }

})

export default apiClient;  