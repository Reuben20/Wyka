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
        navbar__list.style.transition = "0.5s"
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

var input = document.getElementById('input-id')
var datePicker = new HotelDatepicker(input, {
    format: 'dddd D MMM YYYY',
    startOfWeek: 'monday',
    i18n: {
        selected: 'Il tuo soggiorno:',
        night: 'Noche',
        nights: 'Noches',
        button: 'Cerca',
        clearButton: 'Cancelar',
        submitButton: 'Enviar',
        'day-names-short': ['Dom', 'Lun', 'Mar', 'Mir', 'Jue', 'Vie', 'Sab'],
        'day-names': ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        'month-names-short': ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Set', 'Oct', 'Nov', 'Dic'],
        'month-names': ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'],
    }
})