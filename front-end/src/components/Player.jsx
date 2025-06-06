import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCirclePlay,
  faCirclePause,
  faBackwardStep,
  faForwardStep,
  faShuffle,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { artistArray } from "../../api/api.js";
import { songsArray } from "../../api/api.js";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useRef, useEffect } from "react";

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds - minutes * 60)
    .toString()
    .padStart(2, "0");

  return `${minutes}:${seconds}`;
};

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");
  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);
  return minutes * 60 + seconds;
};

const Player = ({ duration, audio }) => {
  const { id } = useParams();

  const audioPlayer = useRef();
  const progressBar = useRef();

  const [isPlaying, setisPlaying] = useState(false);

  const [currenTime, setCurrentTime] = useState(formatTime(0));

  const durationInSeconds = timeInSeconds(duration);

  const playPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setisPlaying(!isPlaying);
  };

  const stop = () => {
    audioPlayer.current.load();
    setCurrentTime(formatTime(0));
    setisPlaying(!isPlaying);
    progressBar.current.style.setProperty(
      "--_progress",
      setCurrentTime(formatTime(0)) + "%"
    );
  };

  useEffect(() => {
    // O useEffect vai rodando até que isPlaying é modificado. Quando é modificado, o intervalo é limpo e é executado novamente
    //Executa o que o programador quer executar
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime)); //Esse if foi adicionado porque quando isPlaying for modificado, fará mais uma vez a execução do setInterval. No caso adicionaria mais 1s ao tempo da música

      progressBar.current.style.setProperty(
        "--_progress",
        (audioPlayer.current.currentTime / durationInSeconds) * 100 + "%"
      );
    }, 1000);

    return () => {
      //Esse return executa, no caso desse projeto, a limpeza do intervalo para não ficar re-renderizando de forma recursiva
      clearInterval(intervalId);
    };
  }, [isPlaying]); //O que vai motivar a execução do useEffect.

  const [isShuffle, setisShuffle] = useState(false);

  let indexArray = songsArray.findIndex((obj) => obj._id === id);

  const artistObj = artistArray.filter(
    (currArtistObj) => currArtistObj._id === id
  )[0];

  const random = Math.floor(Math.random() * songsArray.length);

  // const songsArrayFromArtistObj = songsArray.filter(
  //   (currSongFromArtist) => currSongFromArtist.artist === artist
  // );
  //console.log(random);
  //console.log(songsArray[random]._id);

  // const randomIndex =
  //   Math.floor(Math.random() * songsArrayFromArtistObj.length) - 1;

  // const randomIdFromArtist = songsArrayFromArtistObj[randomIndex];
  // console.log(randomIdFromArtist);
  // const randomId = songsArrayFromArtistObj[randomIndex].;
  // console.log(randomIdFromArtist);

  return (
    <div className="player">
      <div className="player__controllers">
        {indexArray == 0 ? (
          <FontAwesomeIcon
            className="player__icon--disable"
            icon={faBackwardStep}
          />
        ) : (
          <Link
            to={
              isShuffle
                ? `/song/${songsArray[random]._id}`
                : `/song/${songsArray[indexArray - 1]._id}`
            }
          >
            <FontAwesomeIcon
              onClick={() => stop()}
              className="player__icon"
              icon={faBackwardStep}
            />
          </Link>
        )}
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => playPause()}
        />
        <Link
          to={
            isShuffle
              ? `/song/${songsArray[random]._id}`
              : `/song/${songsArray[indexArray + 1]._id}`
          }
        >
          <FontAwesomeIcon
            onClick={() => stop()}
            className="player__icon"
            icon={faForwardStep}
          />
        </Link>

        <FontAwesomeIcon
          className="player__icon"
          icon={faShuffle}
          onClick={() => {
            setisShuffle(!isShuffle);
          }}
          color={isShuffle ? "hsl(141deg 75% 50%)" : "hsl(141deg 75% 90%)"}
        />
      </div>
      <div className="player__progress">
        <p className="player__time">{currenTime}</p>
        <div className="player__bar">
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p className="player__time">{duration}</p>
      </div>
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};

export default Player;
