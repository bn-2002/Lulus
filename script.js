const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const freeShipping = document.getElementById('free-shipping');
const hideFreeShippingBtn = document.getElementById('hide-free-shipping');
const headerMenu = document.querySelector('.header-menu');
const headerNavbar = document.querySelector('.header-navbar');

const newsLink = document.querySelector('.news-link');
const newsList = document.querySelector('.news-list');

const bestsellersLink = document.querySelector('.bestsellers-link');
const bestsellersList = document.querySelector('.bestsellers-list');

const dressesLink = document.querySelector('.dresses-link');
const dressesList = document.querySelector('.dresses-list');

const weddingsLink = document.querySelector('.weddings-link');
const weddingsList = document.querySelector('.weddings-list');

const clothingsLink = document.querySelector('.clothings-link');
const clothingsList = document.querySelector('.clothings-list');

const intimatesLink = document.querySelector('.intimates-link');
const intimatesList = document.querySelector('.intimates-list');

const swimLink = document.querySelector('.swim-link');
const swimList = document.querySelector('.swim-list');

const shoesLink = document.querySelector('.shoes-link');
const shoesList = document.querySelector('.shoes-list');

const extrasLink = document.querySelector('.extras-link');
const extrasList = document.querySelector('.extras-list');

const salesLink = document.querySelector('.sales-link');
const salesList = document.querySelector('.sales-list');

/////////// hide and show navbar ///////////
toggle.addEventListener('click', function () {
  navbar.classList.toggle('-right-full');
  navbar.classList.toggle('right-0');
});

///////////////////hide free shipping message ////////////
hideFreeShippingBtn.addEventListener('click', function () {
  freeShipping.classList.add('hidden');
});

//////////////////swipper/////////////////
const swiper = new Swiper('.swiper', {
  slidesPerView: 7,
  spaceBetween: 5,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
  },
});

///////////////////////////// sticky navbar /////////////////
const clientHeight = headerMenu.clientHeight + freeShipping.clientHeight;

window.addEventListener('scroll', function () {
  // headerNavbar.classList.toggle('fixed-navbar',window.scrollY > clientHeight);

  if (window.pageYOffset > clientHeight) {
    console.log('sticky');
    headerNavbar.classList.add('fixed-navbar');
  } else {
    console.log('block');
    headerNavbar.classList.remove('fixed-navbar');
  }
});

const showSubMenu = function (link, list) {
  link.addEventListener('mouseover', function () {
    list.classList.remove('hide-list');
    list.classList.add('display-list');
  });

  link.addEventListener('mouseout', function () {
    list.classList.add('hide-list');
    list.classList.remove('display-list');
  });
};

showSubMenu(newsLink, newsList);
showSubMenu(bestsellersLink, bestsellersList);
showSubMenu(dressesLink, dressesList);
showSubMenu(weddingsLink, weddingsList);
showSubMenu(clothingsLink, clothingsList);
showSubMenu(intimatesLink, intimatesList);
showSubMenu(swimLink, swimList);
showSubMenu(shoesLink, shoesList);
showSubMenu(extrasLink, extrasList);
showSubMenu(salesLink, salesList);