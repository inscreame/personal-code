
// intro effect

TweenMax.from('.logo', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom('.menu__items .items-link', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut
}, 0.08)

TweenMax.from('.darklight-button', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Power4.easeInOut
})

TweenMax.staggerFrom('.social .fab', 1, {
    delay: 1.2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
}, 0.08)

TweenMax.from('.name', 1, {
    delay: 2.4,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.staggerFrom('.title span', 1, {
    delay: 2,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
}, 0.1)

TweenMax.from('.detail', 1, {
    delay: 3,
    opacity: 0,
    x: -20,
    ease: Expo.easeInOut
})

TweenMax.to('.first', 1.5, {
    delay: .2,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.second', 1.5, {
    delay: .4,
    left: '-100%',
    ease: Expo.easeInOut
})

TweenMax.to('.third', 1.5, {
    delay: .6,
    left: '-100%',
    ease: Expo.easeInOut
})


// about main effect

var image = document.getElementsByClassName('ione');
new simpleParallax(image, {
    scale: 1.8
});

var image = document.getElementsByClassName('itwo');
new simpleParallax(image, {
    scale: 1.6,
    orientation: 'left'
});

var image = document.getElementsByClassName('ithree');
new simpleParallax(image, {
    scale: 1.6,
    orientation: 'right'
});

var image = document.getElementsByClassName('ifour');
new simpleParallax(image, {
    scale: 1.6,
});

var image = document.getElementsByClassName('ifive');
new simpleParallax(image, {
    scale: 1.6,
    orientation: 'right'
});

var image = document.getElementsByClassName('isix');
new simpleParallax(image, {
    scale: 1.6,
    orientation: 'left'
});

//cursor 
$(function () {
    var body = document.querySelector('body');
    var $cursor = $('.cursor');
    var $cursortwo = $('.cursor-two')
    function cursormover(e) {

        gsap.to($cursor, {
            x: e.clientX,
            y: e.clientY,
        })
        gsap.to($cursortwo, {
            x: e.clientX,
            y: e.clientY,
        })
    }
    function cursorhover(e) {
        gsap.to($cursor, {
            scale: 1.5,
            opacity: .4,
            background: 'white',
            border: 'none',
            ease: Expo.easeOut,
        })
        gsap.to($cursortwo, {
            scale: 0,
            opacity: 0
        })
    }
    function linkhover(e) {
        gsap.to($cursor, {
            scale: 1.5,
            opacity: 1,
            background: 'rgb(245,245,245)',
            border: 'none',
            innerHTML: 'view <br> project'
        })
        gsap.to($cursortwo, {
            scale: 0,
            opacity: 0
        })
    }
    function cursor(e) {
        gsap.to($cursor, {
            scale: 1,
            opacity: 1,
            background: 'transparent',
            border: '1px solid rgb(235,235,235)',
            innerHTML: ''
        })
        gsap.to($cursortwo, {
            scale: 1,
            opacity: 1
        })
    }
    $(window).on('mousemove', cursormover);
    $('a').hover(cursorhover, cursor);
    $('.control').hover(cursorhover, cursor);
    $('.hover').hover(cursorhover, cursor);
    $('.project-link').hover(linkhover, cursor)

})

//cursor over



new WOW().init();

var textWrapper = document.querySelector(".hero-title");
textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
);
$(document).ready(function () {
    anime.timeline({ loop: false }).add({
        targets: ".hero-title .letter",
        translateY: [120, 0],
        translateZ: 0,
        opacity: [0, 1],
        easing: "easeOutExpo",
        duration: 1400,
        delay: (el, i) => 2000 + 40 * i
    });
});

var t1 = new TimelineMax({ paused: true });

TweenMax.from(".hero-logo", 2, {
    y: 20,
    opacity: 0,
    ease: Expo.easeInOut,
    delay: 1
});