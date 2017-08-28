function toggleBurger() {
    var burgerIcon = document.getElementById('burgerIcon');
    var navMenu = document.getElementById('navMenu');
    burgerIcon.classList.toggle('is-active');
    navMenu.classList.toggle('is-active');
}