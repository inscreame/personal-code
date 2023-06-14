// darklight
const change = document.getElementById('change');
const home = document.getElementById('home');

// Toggle button text on click
change.addEventListener('click', function handleClick() {
    const initialText = 'Light Mood';

    if (change.textContent.toLowerCase().includes(initialText.toLowerCase())) {
        change.textContent = 'Dark Mood';
        document.body.classList.add('active');
        body.home.style.transition = '2s';
    } else {
        change.textContent = initialText;
        document.body.classList.remove('active');
        body.home.style.transition = '2s';
    }
});

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
