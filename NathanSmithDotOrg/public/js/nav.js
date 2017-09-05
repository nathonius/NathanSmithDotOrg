function toggleBurger() {
    var burgerIcon = document.getElementById('burgerIcon');
    var navMenu = document.getElementById('navMenu');
    burgerIcon.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
}
function closeBurger() {
    var burgerIcon = document.getElementById('burgerIcon');
    var navMenu = document.getElementById('navMenu');
    burgerIcon.classList.remove('is-active');
    navMenu.classList.remove('is-active');
}
function scrollCheck() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById('top-button').classList.add('is-shown');
    }
    else {
        document.getElementById('top-button').classList.remove('is-shown');
    }
}
window.onscroll = scrollCheck;
//# sourceMappingURL=nav.js.map