const swiper = new Swiper('.assortmentSwiper', {
    direction: 'horizontal',
    loop: true,
    slidesPerView: 4,
    spaceBetween: 16,
    freeMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 0
        },
        576: {
            slidesPerView: 2,
            spaceBetween: 8
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 12
        },
        992: {
            slidesPerView: 4,
            spaceBetween: 16
        }
    }
});


const swiper2 = new Swiper('.partnerSwiper', {
    direction: 'horizontal',
    loop: true,
    slidesToScroll: 1,
    slidesPerView: 6,
    spaceBetween: 50,
    freeMode: true,
    autoplay: {
        delay: 5000,
        disableOnInteraction: false,
    },
    breakpoints: {
        320: {
            slidesPerView: 2,
            spaceBetween: 0
        },
        576: {
            slidesPerView: 3,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 30
        },
        992: {
            slidesPerView: 5,
            spaceBetween: 40
        }
    }
});