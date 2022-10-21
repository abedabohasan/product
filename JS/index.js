let playingButton = document.getElementById("playing-button");
let videoConteainer = document.getElementById("video-container");
let video = document.getElementById("second-video");
playingButton.addEventListener("click", function () {
  video.play();
  videoConteainer.classList.add("no-after");
  playingButton.style.display = "none";
});

videoConteainer.addEventListener("click", function () {
  video.pause();
  videoConteainer.classList.remove("no-after");
  playingButton.style.display = "flex";
});
