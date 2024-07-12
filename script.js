let menu    = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');
let topMenu = document.querySelectorAll('.top-bar-menu');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
let section  = document.querySelectorAll('.main-section');
let navlinks = document.querySelectorAll('header .navbar a');

window.onscroll = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');

    section.forEach(sec =>{
        let top    = window.scrollY;
        let height = sec.offsetHeight;
        let offset = sec.offsetTop - 150;
        let id     = sec.getAttribute('id');

        if(top >= offset && top < offset + height){

            navlinks.forEach(links =>{
                links.classList.remove('active');
                document.querySelector('header .navbar a[href*='+id+']').classList.add('active');
            });
        }
    })
}

// topMenu.forEach(m =>{
//     m.addEventListener('click', function(e){
//         topMenu.forEach(men => {
//             men.classList.remove('active');
//         });

//         m.classList.add('active');
//     });
// });

document.querySelector('#search-icon').onclick = () =>{
    document.querySelector('#search-form').classList.toggle('active');
}

document.querySelector('#close').onclick = () =>{
    document.querySelector('#search-form').classList.remove('active');
}

var swiper = new Swiper(".home-slider", {
    spaceBetween: 150,
    centeredSlides: true,
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    loop:true,
});

var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    centeredSlides: true,
    autoplay: {
        delay: 5500,
        disableOnInteraction: false,
    },
    loop:true,
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        640: {
            slidesPerView: 2,
        },
        768: {
            slidesPerView: 2,
        },
        1024: {
            slidesPerView: 3,
        },
    },
});