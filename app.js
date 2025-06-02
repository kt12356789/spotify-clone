const audio = document.getElementById("audioPlayer");
const seek = document.getElementById("seek");

function playAudio() {
  audio.play();
}

function togglePlay() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}

audio.addEventListener("timeupdate", () => {
  seek.value = (audio.currentTime / audio.duration) * 100;
});

function seekAudio(val) {
  audio.currentTime = (val / 100) * audio.duration;
}
