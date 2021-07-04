// burger bar
$("#burger-menu").on("click", function(){
    $("#menu").toggleClass("open-menu");
  })

  // slider
  $(function(){
    $('.multiple-items').slick({
   infinite: true,
   slidesToShow: 3,
   slidesToScroll: 1,
   arrows: true,
   dots:false,
   responsive: [
       {
         breakpoint: 768,
         settings: {
           slidesToShow: 2,
           slidesToScroll: 1
         }
       },
       {
         breakpoint: 480,
         settings: {
           slidesToShow: 1,
           slidesToScroll: 1
         }
       }
     ]
   });    
  });

// slider2
const selection = document.querySelectorAll(".box span"),
showItem = document.querySelectorAll(".price__box"),
arrowMove =document.querySelector(".arrow"),
add = document.querySelector(".add"),
minus = document.querySelector(".minus");
let currValue = 1;
selection.forEach((item) =>{
    item.addEventListener('click',showdata);
});
function showdata(){
    reset();
    this.classList.add('active');
    const dataIndex = Number(this.dataset.index);
    showItem.forEach((item,index) => {
        if(dataIndex == index){
            if(index == 0){
                arrowMove.style.left = "35px"; 
            }
            if(index == 1){
                arrowMove.style.left = "150px"; 
            }
            if(index == 2){
                arrowMove.style.left = "265px"; 
            }
            item.classList.add("show");
        }
    });
}
function reset(){
    selection.forEach((item) => {
        item.classList.remove("active")
    });
    showItem.forEach((item) => {
        item.classList.remove("show")
    });
}
add.addEventListener('click',() => {
    currValue++;
    document.querySelector(".adding span").innerHTML = currValue;
});
minus.addEventListener('click',() => {
    currValue--;
    if(currValue <= 0){
        currValue = 0;
    }
    document.querySelector(".adding span").innerHTML = currValue;
});
