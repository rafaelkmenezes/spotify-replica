//Fetch (nativo JS) ou Axios (não nativo)
// import "dotenv/config";
import axios from "axios";

// const NODE_ENV = process.env.NODE_ENV;
// OU
// const { NODE_ENV } = process.env;
// const URL = "http://localhost:3000/api";
const URL = "https://spotify-replica-i7i4.onrender.com/api";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

//console.log(responseArtists);
// console.log(responseArtists.data);
// //console.log(responseSongs);
// console.log(responseSongs.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
