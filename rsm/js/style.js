const reviews = new Swiper('.reviews__swiper', {
    spaceBetween: 20,
    slidesPerView: 3,

    navigation: {
        nextEl: '.reviews__next',
        prevEl: '.reviews__prev',
    },

    breakpoints: {
        0: {
            spaceBetween: 12,
            slidesPerView: 1.2,
        },

        600: {
            slidesPerView: 1,
        },

        900: {
            slidesPerView: 2,
        },

        1301: {
            slidesPerView: 3,
        },
    },
});

const brands = new Swiper('.brands__swiper', {
    spaceBetween: 20,
    slidesPerView: 5,
    slidesPerGroup: 3,

    navigation: {
        nextEl: '.brands__next',
        prevEl: '.brands__prev',
    },

    breakpoints: {
        0: {
            spaceBetween: 12,
            slidesPerView: 1.2,
            slidesPerGroup: 1,
        },

        600: {
            slidesPerView: 2,
            slidesPerGroup: 2,
        },

        1000: {
            slidesPerView: 3,
            slidesPerGroup: 3,
        },
        
        1300: {
            slidesPerView: 4,
            slidesPerGroup: 4,
        },

        1301: {
            slidesPerView: 5,
            slidesPerGroup: 5,
        },
    },
});

function copyTel(classBtn, classNumber) {
    var copyTelBtn = document.querySelector(classBtn);
    copyTelBtn.addEventListener('click', function(event) {
        var telLink = document.querySelector(classNumber);
        var range = document.createRange();
        range.selectNode(telLink);
        window.getSelection().addRange(range);

        try {
            var successful = document.execCommand('copy');
            var msg = successful ? 'successful' : 'unsuccessful';
            console.log('Copy email command was ' + msg);
        } catch(err) {
            console.log('Oops, unable to copy');
        }
        window.getSelection().removeAllRanges();
    });
}

copyTel('.footer__number-copy', '.footer__number');