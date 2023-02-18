$(function () {
    
    $('.faq-list__item').on('click', function (event) {
        if( $(this)[0].classList.contains('faq-list__item--active') ) {
            $(this).removeClass('faq-list__item--active');
        } else {
            $(this).toggleClass('faq-list__item--active');
        }
    });


})

// $(function () {
//     var mixer = mixitup('.draws-info__inner', {
//         load: {
//             filter: '.draw'
//         },
//         animation: {
//             enable: false
//         },
//     });
// })

// $(function () {
//     var containerEl1 = document.querySelector('[data-ref="container-1"]');
//     var containerEl2 = document.querySelector('[data-ref="container-2"]');

//     var config = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };
//     var confiG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-firstt',
//         },
//         animation: {
//             effects: 'fade scale(0%)',
//             duration: 0,
//         },
//     };

//     var confiGG = {
//         controls: {
//             scope: 'local'
//         },
//         load: {
//             filter: '.item-first',
//         }
//     };

//     var mixer1 = mixitup(containerEl1, config);
//     var mixer1 = mixitup(containerEl2, confiG);

// })

new Swiper('.steps-swiper', {
    slidesPerView: 1,
    enabled: false,
    pagination: {
    
    },
    // breakpoints: {
    //     301: {
    //         slidesPerView: 2.2,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    //     501: {
    //         slidesPerView: 2.5,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    //     951: {
    //         slidesPerView: 3.2,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    //     1051: {
    //         slidesPerView: 3.5,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    //     1201: {
    //         slidesPerView: 4,
    //         centeredSlides: true,
    //         initialSlide: 1,
    //         slidesPerGroup: 1,
    //         loopedSlides: 6,
    //     },
    //     1701: {
    //         centeredSlides: false,
    //         slidesPerView: 6,
    //         initialSlide: 0,
    //     }
    // }
});