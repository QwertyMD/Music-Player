function playbackControl(playButton, pauseButton, thumbnail, song) {
  playButton.addEventListener("click", () => {
    song.play();
    playButton.classList.toggle("hidden");
    pauseButton.classList.toggle("hidden");
    thumbnail.classList.toggle("animate-pulse");
  });
  pauseButton.addEventListener("click", () => {
    song.pause();
    playButton.classList.toggle("hidden");
    pauseButton.classList.toggle("hidden");
    thumbnail.classList.toggle("animate-pulse");
  });
}

function interactiveDuration(song, durationBar) {
  durationBar.addEventListener("click", (e) => {
    const clickPosition = e.offsetX;
    const barWidth = durationBar.offsetWidth;
    const newTime = (clickPosition / barWidth) * song.duration;
    song.currentTime = newTime;
  });
}

function updateDuration(song, durationCircle) {
  const percentage = (song.currentTime / song.duration) * 100;
  durationCircle.style.left = `calc(${percentage}% - 5px)`;
}

export { playbackControl, interactiveDuration, updateDuration };
