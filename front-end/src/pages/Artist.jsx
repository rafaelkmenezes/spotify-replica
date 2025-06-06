import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Link, useParams } from "react-router-dom";
import SongList from "../components/SongList";
import { artistArray } from "../../api/api.js";
import { songsArray } from "../../api/api.js";

const Artist = () => {
  const { id } = useParams();

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj._id === id
  )[0];

  console.log(artistObj);

  const songsArrayFromArtistObj = songsArray.filter(
    (currSongFromArtist) => currSongFromArtist.artist === artistObj.name
  );

  const randomIndex =
    Math.floor(Math.random() * songsArrayFromArtistObj.length) - 1;
  // const randomIdFromArtist = songsArrayFromArtistObj[randomIndex].id;
  const randomIdFromArtist = songsArrayFromArtistObj[randomIndex];
  const randomId = songsArrayFromArtistObj[randomIndex]._id;
  // console.log(songsArrayFromArtistObj[randomIndex]);
  // console.log(songsArrayFromArtistObj[randomIndex].id);
  // console.log(randomIdFromArtist);
  // console.log(randomId);

  // console.log(artistObj);
  // console.log("artistObj.name: " + artistObj.name);
  // console.log(songsArrayFromArtistObj);
  // console.log("randomIndex: " + randomIndex);
  // console.log(
  //   "songsArrayFromArtistObj[randomIndex].name: " +
  //     songsArrayFromArtistObj[randomIndex].name
  // );
  // console.log("randomIdFromArtist: " + randomIdFromArtist);
  // console.log(songsArrayFromArtistObj);
  // console.log(artistObj.name);

  return (
    <div className="artist">
      <div
        className="artist__header"
        style={{
          backgroundImage: `linear-gradient(to bottom, var(--_shade)), url(${artistObj.banner}`,
        }}
      >
        <h2 className="artist__title">{artistObj.name}</h2>
      </div>

      <div className="artist__body">
        <h2>Populares</h2>
        <SongList songsArray={songsArrayFromArtistObj} />
        <Link to={`/song/${randomId}`}>
          <FontAwesomeIcon
            className="single-item__icon single-item__icon--artist"
            icon={faCirclePlay}
          />
        </Link>
      </div>
    </div>
  );
};

export default Artist;
