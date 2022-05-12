import axios from 'axios';

export const getRecipes = async (endpoint,params="") => {
    const apiKey=process.env.REACT_APP_THEMOVIEDB_APIKEY
    const url = `${process.env.REACT_APP_THEMOVIEDB_URL}${endpoint}?apiKey=${apiKey}${params}`;
    console.log("UEL",url)
    return axios.get(url)
    .then(response => response.data)
    .catch(function (error) {
      console.log(error);
    })
}
