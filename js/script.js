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
