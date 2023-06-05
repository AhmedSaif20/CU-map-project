
// Top-button
let toTop = document.querySelector(".upT");
window.onscroll = function () {
    this.scrollY >= 700 ? toTop.classList.add("show") : toTop.classList.remove("show");
};
toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// Services-Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        400: {
        slidesPerView: 2,
        spaceBetween: 20,
        },
        676: {
        slidesPerView: 3,
        spaceBetween: 30,
        },
        992: {
        slidesPerView: 4,
        spaceBetween: 40,
        }
    }
});

// loading
window.addEventListener("load", () => {

    const loader = document.querySelector(".loader");

    loader.classList.add("loader-hidden");

    loader.addEventListener("transitionend", () => {
        document.body.removeChild("loader");
    });

});