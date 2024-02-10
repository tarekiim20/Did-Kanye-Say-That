const yesButton = document.querySelector("#Yes");
const noButton = document.querySelector("#No");
const img = document.querySelector("img");
const body = document.querySelector("body");
const randomization = document.querySelector(".hidden");
const wrongVideo = document.querySelector("video");
console.log(randomization.innerHTML);

yesButton.addEventListener("click", () => {
  if (randomization.innerHTML === "0") {
    body.style.backgroundColor = "green";
    img.src = "Yes.png";
    img.style.height = "500px";
    let mySound = new Audio("that-was-good-101soundboards.mp3");
    mySound.play();
    setTimeout(() => {
      location.reload();
    }, 1250);
  } else {
    body.style.backgroundColor = "red";
    wrongVideo.style.display = "block";
    wrongVideo.play();
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
});

noButton.addEventListener("click", () => {
  if (randomization.innerHTML === "1") {
    body.style.backgroundColor = "green";
    img.src = "Yes.png";
    img.style.height = "500px";
    let mySound = new Audio("that-was-good-101soundboards.mp3");
    mySound.play();
    setTimeout(() => {
      location.reload();
    }, 1250);
  } else {
    body.style.backgroundColor = "red";
    wrongVideo.style.display = "block";
    wrongVideo.play();
    setTimeout(() => {
      location.reload();
    }, 5000);
  }
});
