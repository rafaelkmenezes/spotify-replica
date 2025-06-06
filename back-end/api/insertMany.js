import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import { database } from "./connect.js";

const newArtistArray = artistArray.map((currentArtistObj, index) => {
  const newArtistObj = { ...currentArtistObj };
  delete newArtistObj.id;

  return newArtistObj;
});

const newSongsArray = songsArray.map((currentSongsObj) => {
  const newSongsObj = { ...currentSongsObj };
  delete newSongsObj.id;

  return newSongsObj;
});

const artistResponse = await database
  .collection("artists")
  .insertMany(newArtistArray);

const songsResponse = await database
  .collection("songs")
  .insertMany(newSongsArray);

//console.log(artistArray);
//console.log(newArtistArray);
// console.log(newSongsArray);
// console.log(artistResponse);
// console.log(songsResponse);
