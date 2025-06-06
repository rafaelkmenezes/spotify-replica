import React from "react";
import SongItem from "./SongItem";
import { Link } from "react-router-dom";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  // let items = 5;
  const [items, setItems] = useState(5);
  // console.log(items);

  // const array1 = songsArray.filter((currentValue, index) => index < items);
  // const array2 = array1.map((currentSongObj, index) => (
  //   <SongItem {...currentSongObj} index={index} key={index} />
  // ));

  return (
    <div className="song-list">
      {songsArray
        .filter((currentValue, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}

      <p
        to=""
        className="song-list__see-more"
        onClick={() => setItems(items + 5)}
      >
        Ver mais
      </p>
    </div>
  );
};

export default SongList;
