"use strict";

window.onload = function () {
  alert("Welcome to our website!");
};

const images = [
  "img/1.jpg",
  "img/2.jpg",
  "img/3.jpg",
  "img/4.jpg",
  "img/5.jpg",
];

let currentIndex = 0;

function showImage(index) {
  document.getElementById("slider-image").src = images[index];
}

function prevImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

function nextImage() {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}

function openModal() {
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  const sliderImg = document.getElementById("slider-image");

  modal.style.display = "block";
  modalImg.src = sliderImg.src;
}

function closeModal() {
  document.getElementById("imageModal").style.display = "none";
}

// Windows close when you click on blank
window.onclick = function (event) {
  const modal = document.getElementById("imageModal");
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

/**
 *
 * Author: Milovan Grbic 2025
 *
 */
