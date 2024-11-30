import { items } from "./songCollection.js";

function songUpdate(thumbnail, song, songName, currentIdx) {
  if (currentIdx < 1) currentIdx = Object.keys(items).length;
  if (currentIdx > Object.keys(items).length) currentIdx = 1;
  thumbnail.style.backgroundImage = `url('${items[currentIdx].thumbnail}')`;
  songName.textContent = `${items[currentIdx].name}`;
  song.src = `${items[currentIdx].song}`;
}

export { songUpdate };
