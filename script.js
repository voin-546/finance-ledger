$('.hero__scroll').on('click', function(e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 1200);
});
AOS.init({
    duration: 1200
});
let burger = document.querySelector(".burger");
burger.addEventListener("click", showMenu);
function showMenu () {
    let header = document.querySelector("header");
    header.classList.toggle("show");
}
let icon = document.querySelector(".appearance");
icon.onclick = function () {
    let body = document.querySelector("body");
    body.classList.toggle("dark");
    icon.classList.toggle("switch");
}