import React, { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPauseCircle,
  faPlayCircle,
} from "@fortawesome/free-regular-svg-icons";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";
import Pandora from "../assets/Pandora.mp3";

const pause = (
  <FontAwesomeIcon icon={faPauseCircle} style={{ color: "#000000" }} />
);
const play = (
  <FontAwesomeIcon icon={faPlayCircle} style={{ color: "#000000" }} />
);

const Backward = (
  <FontAwesomeIcon icon={faBackward} style={{ color: "#000000" }} />
);

const Forward = (
  <FontAwesomeIcon icon={faForward} style={{ color: "#000000" }} />
);

const songs = [[Pandora, "~Lacie~"]];

const AudioPlayer = ({ src }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const audioRef = useRef(null);
  const [url, name] = songs[currentIndex] || [];

  const handlePlayPause = () => {
    const audioElement = audioRef.current;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(audioRef.current.duration);
  };

  // 播放下一首
  const playNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  // 播放上一首
  const playPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + songs.length) % songs.length
    );
  };

  const progressPercent =
    duration > 0 ? Math.floor((currentTime / duration) * 100) : 0;

  return (
    <div>
      <div class="music-player max-w-xs mx-auto bg-lime-100 shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]">
        <div class="py-1.5">
          <audio
            ref={audioRef}
            src={url}
            onTimeUpdate={handleTimeUpdate}
            onLoadedMetadata={handleLoadedMetadata}
          />
          <button onClick={playPrev} class="px-5">
            {Backward}
          </button>
          <button onClick={handlePlayPause}>{isPlaying ? pause : play}</button>
          <button onClick={playNext} class="px-5">
            {Forward}
          </button>
        </div>
        {/* <p>
          Progress: {Math.floor(currentTime)} / {Math.floor(duration)}
        </p> */}
        <div className="w-full h-0.5 mt-1">
          {/* 实际进度条，根据比例设置宽度 */}
          <div
            className="bg-lime-950 h-0.5 rounded-full"
            style={{ width: `${progressPercent}%` }}
          ></div>
        </div>
        <p class="text-xs pt-1 italic py-1">Now Playing: {name} </p>
      </div>
    </div>
  );
};

export default AudioPlayer;
