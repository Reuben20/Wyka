var swiper_info = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    autoplay: {
        delay: 5000,
    }
});

var swiper_habitaciones = new Swiper(".mySwiper_2", {
    slidesPerView: 4,
    centeredSlides: true,
    spaceBetween: 30,
    grabCursor: true,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
});


document.getElementById('video').play()

const navbar__list = document.getElementById('navbar__list')

var state = false

document.getElementById('menu').addEventListener("click", () => {
    if (state === false) {
        navbar__list.style.transition = "0.4s"
        navbar__list.style.visibility = "visible"
        navbar__list.style.flexDirection = "column"
        navbar__list.style.marginTop = "50px"
        navbar__list.style.paddingBottom = "50px"
        state = true
    } else {
        navbar__list.style.transition = "0s"
        navbar__list.style.visibility = "hidden"
        navbar__list.style.flexDirection = "row"
        navbar__list.style.marginTop = "0"
        navbar__list.style.paddingBottom = "0"
        state = false
    }
})