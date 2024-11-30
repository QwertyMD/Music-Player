const playButton = document.querySelector("#play");
const pauseButton = document.querySelector("#pause");
const thumbnail = document.querySelector(".slideshow-container");
const song = document.querySelector("audio");
const durationBar = document.querySelector(".duration-bar");
const durationCircle = document.querySelector(".duration-circle");
const volumeBar = document.querySelector(".volume-bar");
const volumeCircle = document.querySelector(".volume-circle");
const muteSong = document.querySelector("#mute");
const unmuteSong = document.querySelector("#unmute");
const songName = document.querySelector(".song-name");
const prevSong = document.querySelector("#previous");
const nextSong = document.querySelector("#next");

let currentIdx = 1;

import {
  playbackControl,
  interactiveDuration,
  updateDuration,
} from "./playbackControl.js";
import { volumeControl, interactiveVolume } from "./volumeControl.js";
import { songUpdate } from "./songUpdate.js";
import { items } from "./songCollection.js";

playbackControl(playButton, pauseButton, thumbnail, song);
interactiveDuration(song, durationBar);
volumeControl(song, muteSong, unmuteSong);
interactiveVolume(song, volumeBar, volumeCircle);
songUpdate(thumbnail, song, songName, currentIdx);

song.addEventListener("timeupdate", () => {
  updateDuration(song, durationCircle);
});
song.addEventListener("ended", () => {
  currentIdx = currentIdx === Object.keys(items).length ? 1 : currentIdx + 1;
  songUpdate(thumbnail, song, songName, currentIdx);
  song.play();
});

prevSong.addEventListener("click", () => {
  currentIdx = currentIdx === 1 ? Object.keys(items).length : currentIdx - 1;
  songUpdate(thumbnail, song, songName, currentIdx);
  song.play();
  playButton.classList.add("hidden");
  pauseButton.classList.remove("hidden");
  thumbnail.classList.add("animate-pulse");
});
nextSong.addEventListener("click", () => {
  currentIdx = currentIdx === Object.keys(items).length ? 1 : currentIdx + 1;
  songUpdate(thumbnail, song, songName, currentIdx);
  song.play();
  playButton.classList.add("hidden");
  pauseButton.classList.remove("hidden");
  thumbnail.classList.add("animate-pulse");
});
