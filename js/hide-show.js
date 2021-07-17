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