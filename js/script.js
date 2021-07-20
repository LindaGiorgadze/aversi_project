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
      } else {
          slidePosition++;
      }
      updateSlidesPosition();
  }
  function moveToPrevSlide(){
      if (slidePosition === 0){
      // totalSlides -1, if you wan't infinite carousel effect to both ways
          slidePosition = 0;  
      } else {
          slidePosition--;
      }
      updateSlidesPosition();
  }

// slider2 + hide and show
const element = document.querySelectorAll('.element');
element.forEach(function(el, key){                
    el.addEventListener('click', function () {
        el.classList.add("active");
            
        element.forEach(function(ell, index){
            if(key !== index) {
                ell.classList.remove('active');
            }
        });
    });
});

let slide2 = 0;
const slides2 = document.getElementsByClassName("carousel__item2");
const totalslides2 = slides2.length;

document.getElementById("carousel__btn--next2")
.addEventListener("click", function(){
    moveNextSlide2();
});
document.getElementById("carousel__btn--prev2")
.addEventListener("click", function(){
    movePrevSlide2();
});
function updateSlidePositions(){
    for(let slide of slides2){
        slide.classList.remove("carousel__item--visible2");
        slide.classList.add("carousel__item--hidden2");
    }
    slides2[slide2].classList.add("carousel__item--visible2");
}
function moveNextSlide2(){
    
    if (slide2 === totalslides2 -1){
        slide2 = 0;
    } else {
        slide2++;
    }
    updateSlidePositions();
}
function movePrevSlide2(){
   
    if (slide2 === 0){
    // totalslides2 -1, if you wan't infinite carousel effect to both ways
        slide2 = 0;  
    } else {
        slide2--;
    }
    updateSlidePositions();
}
//second hide and show
const element3 = document.querySelectorAll('.element3');
element3.forEach(function(el3, key3){                
    el3.addEventListener('click', function () {
        el3.classList.add("active3");
            
        element3.forEach(function(ell3, index3){
            if(key3 !== index3) {
                ell3.classList.remove('active3');
            }
        });
    });
});
//remove
function myFunction() {
    const myobj = document.getElementById("demo");
    myobj.remove();
}
function myFunction1() {
    const myobj = document.getElementById("demo1");
    myobj.remove();
}




