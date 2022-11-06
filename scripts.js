$(window).on("load",function(){
  $(".loader-container").fadeOut(1000);
});

var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});

window.addEventListener("scroll", function(){
  let header = document.querySelector('.navbar');
  header.classList.toggle('sticky', window.scrollY > 0);
});

let toggle = document.querySelector('.menu-btn');
let navbar = document.querySelector('.navigation');
toggle.onclick = function(){
  toggle.classList.toggle('open');
  navbar.classList.toggle('active');
}

function toggleMenu(){
  toggle.classList.remove('open');
  navbar.classList.remove('active');
}

let btnBack = document.querySelector('.back-button');

btnBack.addEventListener('click', () => {
  window.history.back();
});