// smooth scroll 
var blocks = document.getElementsByClassName("container__item");
var container = document.getElementsByClassName("container");
var hs = new HorizontalScroll.default({
    blocks: blocks,
    container: container,
    isAnimated: true,
    springEffect: 0.8,
    skewReducer: 30,
});
