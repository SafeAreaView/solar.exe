let offset = 0; //Смещение
const sliderLine = document.querySelector(".slider-line");

document.querySelector(".slider-next").addEventListener("click", function () {
  offset = offset + 235;
  if (offset > 470) {
    offset = 0;
  }
  sliderLine.style.left = -offset + "px";
});

document.querySelector(".slider-prev").addEventListener("click", function () {
  offset = offset - 235;
  if (offset < 0) {
    offset = 470;
  }
  sliderLine.style.left = -offset + "px";
});

let offset2 = 0; //Смещение
const sliderLine2 = document.querySelector(".slider2-line");

//Второй слайдер
document.querySelector(".slider2-next").addEventListener("click", function () {
  offset2 = offset2 + 510;
  if (offset2 > 1020) {
    offset2 = 0;
  }
  sliderLine2.style.left = -offset2 + "px";
});

document.querySelector(".slider2-prev").addEventListener("click", function () {
  offset2 = offset2 - 510;
  if (offset2 < 0) {
    offset2 = 1020;
  }
  sliderLine2.style.left = -offset2 + "px";
});
