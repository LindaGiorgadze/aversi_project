// burger bar
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })

  // slider
  let slidePosition = 0;
  const slides = document.getElementsByClassName("carousel__item");
  const totalSlides = slides.length;
  
document.getElementById("carousel__btn--next")
  .addEventListener("click", function(){
      moveToNextSlide();
  });
  document.getElementById("carousel__btn--prev")
  .addEventListener("click", function(){
      moveToPrevSlide();
});
function updateSlidesPosition(){
  for(let slide of slides){
    slide.classList.remove("carousel__item--visible");
      slide.classList.add("carousel__item--hidden");
  }
    slides[slidePosition].classList.add("carousel__item--visible");
}
function moveToNextSlide(){   
  if (slidePosition === totalSlides -1){
    slidePosition = 0;
  }else {
    slidePosition++;
  }
  updateSlidesPosition();
}
function moveToPrevSlide(){
  if (slidePosition === 0){
      slidePosition = 0;  
  } else {
    slidePosition--;
  }
  updateSlidesPosition();
}
// heart
(function() {
  const heart = document.getElementById('heart');
  heart.addEventListener('click', function() {
    heart.classList.toggle('red');
  });
})();
function myFunction() {document.getElementById('heart1').style.color = 'red';}
function myFunction1() {document.getElementById('heart2').style.color = 'red';}
function myFunction3() {document.getElementById('heart4').style.color = 'red';}
function myFunction4() {document.getElementById('heart5').style.color = 'red';}
function myFunction5() {document.getElementById('heart6').style.color = 'red';}
function myFunction6() {document.getElementById('heart7').style.color = 'red';}
function myFunction7() {document.getElementById('heart8').style.color = 'red';}

// slider2
const gap = 16;

const carousel = document.getElementById("carousel2"),
  content = document.getElementById("content"),
  next = document.getElementById("next"),
  prev = document.getElementById("prev");

next.addEventListener("click", e => {
  carousel.scrollBy(width + gap, 0);
  if (carousel.scrollWidth !== 0) {
    prev.style.display = "flex";
  }
  if (content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "none";
  }
});
prev.addEventListener("click", e => {
  carousel.scrollBy(-(width + gap), 0);
  if (carousel.scrollLeft - width - gap <= 0) {
    prev.style.display = "none";
  }
  if (!content.scrollWidth - width - gap <= carousel.scrollLeft + width) {
    next.style.display = "flex";
  }
});

let width = carousel.offsetWidth;
window.addEventListener("resize", e => (width = carousel.offsetWidth));