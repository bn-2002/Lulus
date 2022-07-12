const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const freeShipping = document.getElementById('free-shipping');
const hideFreeShippingBtn = document.getElementById('hide-free-shipping');

/////////// hide and show navbar ///////////
toggle.addEventListener('click',function() {
    navbar.classList.toggle('-right-full');
    navbar.classList.toggle('right-0'); 
});

///////////////////hide free shipping message ////////////
hideFreeShippingBtn.addEventListener('click',function() {
    freeShipping.classList.add('hidden');
});



