//Fetch (nativo JS) ou Axios (não nativo)
import axios from "axios";

const URL = "http://localhost:3000";

const responseArtists = await axios.get(`${URL}/artists`);
const responseSongs = await axios.get(`${URL}/songs`);

//console.log(responseArtists);
// console.log(responseArtists.data);
// //console.log(responseSongs);
// console.log(responseSongs.data);

export const artistArray = responseArtists.data;
export const songsArray = responseSongs.data;
