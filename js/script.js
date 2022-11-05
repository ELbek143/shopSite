const sideBar = document.querySelector('.side_bar');
const bodyOverflow = document.querySelector('body');
const closeBar = document.querySelector('#closeSideBar');
const headerSearch = document.querySelector('#header-search');

headerSearch.addEventListener('click', () => {  
  document.querySelector('#open-header-search').classList.toggle('active');
});

document.querySelector('#menuBtn').onclick = () => {
  sideBar.classList.toggle('active');
  bodyOverflow.classList.toggle('active');
};
document.querySelector('#closeSideBar').onclick = () => {
  sideBar.classList.remove('active');
  bodyOverflow.classList.remove('active');
};

document.addEventListener('keydown', (event) => {
  if(event.code === 'Escape') {
    sideBar.classList.remove('active');
    bodyOverflow.classList.remove('active');
  }
});

document.addEventListener('click', (event) => {
  if(!event.target.closest('.side_bar') && (!event.target.closest('#closeSideBar')) && (!event.target.closest('#menuBtn'))) {
    sideBar.classList.remove('active');
    bodyOverflow.classList.remove('active');
  }
});

const header = document.querySelector('.header');

// window.addEventListener('scroll', () => {
//   let scrollPos = window.scrollY; 
//   if (scrollPos > 100) {
//     header.classList.add('active');
//   } else {  
//     header.classList.remove('active');
//   };
// });

const navLink = document.querySelectorAll('.nav_link');

navLink.forEach((item) => {
  item.addEventListener('click', () => {
    if(!item.classList.contains('active')) {
      navLink.forEach((item) => {
        item.classList.remove('active');
      });
      item.classList.add('active');
    };  
  });  
});


var swiper = new Swiper(".mySwiper", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
  },
});

