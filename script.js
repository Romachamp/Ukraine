const screen =  document.querySelectorAll('.full-screen');
// ! animation on load
// window.addEventListener('load', function (e) {
//     screen.classList.add('load');
// });

// ! animation on scroll

window.addEventListener('scroll', function (e) {
    screen.forEach(function (blocks) {
        const windowHeight = window.innerHeight;
        const windowScrollTrigger = windowHeight / 1.2 + window.scrollY;
        const blockOffset = blocks.offsetTop + (blocks.offsetHeight / 2);
        if(windowScrollTrigger >= blockOffset) {
            blocks.classList.add('scroll');
        }
    });

});