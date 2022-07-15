const toggle = document.getElementById('toggle');
const navbar = document.getElementById('navbar');
const freeShipping = document.getElementById('free-shipping');
const hideFreeShippingBtn = document.getElementById('hide-free-shipping');
////////////////// links and their submenu in navbar////////////////
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

const links = [
  newsLink,
  bestsellersLink,
  dressesLink,
  weddingsLink,
  clothingsLink,
  intimatesLink,
  swimLink,
  shoesLink,
  extrasLink,
  salesLink,
];
const lists = [
  newsList,
  bestsellersList,
  dressesList,
  weddingsList,
  clothingsList,
  intimatesList,
  swimList,
  shoesList,
  extrasList,
  salesList,
];

/////////// hide and show navbar ///////////
toggle.addEventListener('click', function () {
  // navbar.classList.toggle('bg-yellow-200');
  // navbar.classList.toggle('bg-yellow-900');
  // navbar.classList.add('transition-all');
  navbar.classList.toggle('-translate-x-full');
  navbar.classList.toggle('translate-x-0');
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

const mediaQuery = window.matchMedia('(min-width: 768px)')
if (mediaQuery.matches) {
  const clientHeight = headerMenu.clientHeight + freeShipping.clientHeight;

window.addEventListener('scroll', function (event) {
  if (window.pageYOffset > clientHeight) {
    headerNavbar.classList.add('fixed');
  } else {
    headerNavbar.classList.remove('fixed');
  }
});

}

///////////////////////////hide or display submenu in navabr////////////////
const showSubMenu = function (link, list) {
  link.addEventListener('mouseover', function () {
    for (let i = 0; i < lists.length; i++) {
      lists[i].classList.add('hide-list');
    }

    list.classList.remove('hide-list');
    // list.classList.add('!transition-transform');
  });

  window.addEventListener('mouseup', function (event) {
    if (
      (event.target != link && event.target.parentNode != link) ||
      (event.target != list && event.target.parentNode != list)
    ) {
      for (let i = 0; i < lists.length; i++) {
        lists[i].classList.add('hide-list');
      }
    }
  });
};

for (let i = 0; i < links.length; i++) {
  showSubMenu(links[i], lists[i]);
}