function volumeControl(song, muteSong, unmuteSong) {
  muteSong.addEventListener("click", () => {
    muteSong.classList.toggle("hidden");
    unmuteSong.classList.toggle("hidden");
    song.muted = false;
  });
  unmuteSong.addEventListener("click", () => {
    muteSong.classList.toggle("hidden");
    unmuteSong.classList.toggle("hidden");
    song.muted = true;
  });
}

function interactiveVolume(song, volumeBar, volumeCircle) {
  volumeBar.addEventListener("click", (e) => {
    const clickPosition = e.offsetX;
    const barWidth = volumeBar.offsetWidth;
    const newVolume = clickPosition / barWidth;
    song.volume = newVolume;
    volumeCircle.style.left = `calc(${newVolume * 100}% - 5px)`;
  });
}

export { volumeControl, interactiveVolume };
