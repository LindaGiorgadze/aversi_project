const element = document.querySelectorAll('.element4');
element.forEach(function(el, key){                
    el.addEventListener('click', function () {
        el.classList.add("active4");
            
        element.forEach(function(ell, index){
            if(key !== index) {
                ell.classList.remove('active4');
            }
        });
    });
});