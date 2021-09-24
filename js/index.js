$(function () {
    $(window).on('scroll', function () {
        if ($(window).scrollTop() > 10) {
            $('.navbar').addClass('active');
        } else {
            $('.navbar').removeClass('active');
        }
    });
});

1
2
3
window.addEventListener("beforeunload", function () {
    document.body.classList.add("animate-out");
});


// show on scroll animation - https://cssanimation.rocks/scroll-animations/

// var scroll = window.requestAnimationFrame ||
//     function (callback) { window.setTimeout(callback, 1000 / 60) };
// var elementsToShow = document.querySelectorAll('.show-on-scroll');
// function loop() {

//     elementsToShow.forEach(function (element) {
//         if (isElementInViewport(element)) {
//             element.classList.add('is-visible');
//         } else {
//             element.classList.remove('is-visible');
//         }
//     });

//     scroll(loop);
// }

// function isElementInViewport(el) {
//     // special bonus for those using jQuery
//     if (typeof jQuery === "function" && el instanceof jQuery) {
//       el = el[0];
//     }
//     var rect = el.getBoundingClientRect();
//     return (
//       (rect.top <= 0
//         && rect.bottom >= 0)
//       ||
//       (rect.bottom >= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.top <= (window.innerHeight || document.documentElement.clientHeight))
//       ||
//       (rect.top >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight))
//     );
//   }