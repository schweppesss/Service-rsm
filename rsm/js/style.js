const reviews = new Swiper('.reviews__swiper', {
    spaceBetween: 60,
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
    spaceBetween: 60,
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

function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        total: t,
        days: days,
        hours: hours,
        minutes: minutes,
        seconds: seconds
    };
}
   
function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var hoursSpan = clock.querySelector(".hours");
    var minutesSpan = clock.querySelector(".minutes");
    var secondsSpan = clock.querySelector(".seconds");

    function updateClock() {
        var t = getTimeRemaining(endtime);

        if (t.total <= 0) {
            clearInterval(timeinterval);
            localStorage.deadline = new Date(Date.parse(new Date()) + 10 * 60 * 60 * 1000);
            initializeClock('countdown', localStorage.deadline);
        }

        hoursSpan.innerHTML = ("0" + t.hours).slice(-2);
        minutesSpan.innerHTML = ("0" + t.minutes).slice(-2);
        secondsSpan.innerHTML = ("0" + t.seconds).slice(-2);
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

initializeClock("countdown", localStorage.deadline);




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