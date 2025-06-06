import React from "react";
import Player from "../components/Player";
import { Link, useParams } from "react-router-dom";
import { artistArray } from "../../api/api.js";
import { songsArray } from "../../api/api.js";
// import { songsArray } from "../assets/database/songs";
// import { artistArray } from "../assets/database/artists";

const Song = () => {
  const { id } = useParams();

  // console.log(id);

  //Retorna um vetor de objetos onde o id passado na URL (id) compara com o id do banco de dados (currSongObj.id). No caso haverá apenas uma ocorrência que estará no índice zero do vetor de objetos
  //const songObj = songsArray.filter((currSongObj) => currSongObj._id === id);
  // console.log(songObj);
  // console.log(songObj[0]);
  // console.log(songObj[0].id);
  //console.log(songObj.audio);
  // console.log(Number(id));
  // console.log(songObj.id);
  // console.log(songObj);
  // console.log(songObj.id);
  // console.log(songObj[0]);

  const songObj = songsArray.filter((currSongObj) => currSongObj._id === id)[0];
  // console.log(songObj);
  // console.log(songObj.artist);

  // console.log(songObj);
  // console.log(songsArray);
  // console.log(artistArray);

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj.name === songObj.artist

    //console.log(currArtistObj);
  )[0];
  // console.log(artistObj);

  return (
    <div className="song">
      <div className="song__container">
        <div className="song__image-container">
          <img src={songObj.image} alt={`Imagem da música ${songObj.name}`} />
        </div>
      </div>
      <div className="song__bar">
        <Link to={`/artist/${artistObj._id}`} className="song__artist-image">
          <img
            width={75}
            height={75}
            src={artistObj.image}
            alt={`Imagem do artista ${artistObj.artist}`}
          />
        </Link>

        <Player duration={songObj.duration} audio={songObj.audio} />

        <div className="song__info">
          <p className="song__name">{songObj.name}</p>
          <p>{songObj.artist}</p>
        </div>
      </div>
    </div>
  );
};

export default Song;
