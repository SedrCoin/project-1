"use strict";

// modals themselves
const modals = document.querySelectorAll(".modal");
const opnButtons = document.getElementsByClassName("open-modal");
const closeButtons = document.getElementsByClassName("close-modal");
const overlay = document.getElementsByClassName("overlay");
const video = document.querySelector(".background-video");
const toggle = document.querySelector("label");
// contacts

// open modals
for (let i = 0; i < opnButtons.length; i++) {
  opnButtons[i].addEventListener("click", () => {
    modals[i].classList.remove("hidden");
    overlay[i].classList.remove("hidden");
  });
}

// close modals
for (let i = 0; i < closeButtons.length; i++) {
  closeButtons[i].addEventListener("click", () => {
    modals[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  });
}

// close modals via overlay
for (let i = 0; i < overlay.length; i++) {
  console.log(overlay[i]);
  overlay[i].addEventListener("click", () => {
    modals[i].classList.add("hidden");
    overlay[i].classList.add("hidden");
  });
}

toggle.addEventListener("click", () => {
  video.classList.toggle("hidden");
});
