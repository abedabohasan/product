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

document.getElementById("thisYear").innerHTML = new Date().getFullYear();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(() => {
  "use strict";

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  const forms = document.querySelectorAll(".needs-validation");

  // Loop over them and prevent submission
  Array.from(forms).forEach((form) => {
    form.addEventListener(
      "submit",
      (event) => {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        }

        form.classList.add("was-validated");
      },
      false
    );
  });
})();
