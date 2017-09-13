declare var SmoothScroll: any;
declare var Waypoint: any;

var myscroll = new SmoothScroll('a[href*="#"]', { header: '#navigation' });

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

function showLabel(btn) {
    if (btn)
        var anchor = document.getElementById('icon-label-' + btn);
    var allLabels = document.querySelectorAll('.icon-label');
    for (var each of allLabels) {
        each.classList.remove('is-shown');
    }
    if (btn)
        anchor.classList.add('is-shown');
}

var nextAnchor = "about-page";

function toggleActive(anchor) {
    var all = document.querySelectorAll('.n-nav-link');
    for (var each of all) {
        each.classList.remove('is-active');
    }
    var thisOne = document.getElementById(anchor);
    thisOne.classList.add('is-active');
}

function setArrowDir(direction) {
    // get arrow, swap direction if need be
}

function goTo() {
    var anchor = document.getElementById(nextAnchor);
    myscroll.animateScroll(anchor);
}

var waypointMain = new Waypoint({
    element: document.getElementById('main-page'),
    handler: function () {
        var all = document.querySelectorAll('.n-nav-link');
        for (var each of all) {
            each.classList.remove('is-active');
        }
        nextAnchor = "about-page";
    }
})

var waypointAboutTop = new Waypoint({
    element: document.getElementById('about-page'),
    handler: function () {
        toggleActive('about-link');
        nextAnchor = "projects-page";
    },
    offset: '50%'
});

var waypointAboutBottom = new Waypoint({
    element: document.getElementById('about-page'),
    handler: function () {
        toggleActive('about-link');
        nextAnchor = "projects-page";
    }
});

var waypointProjectsTop = new Waypoint({
    element: document.getElementById('projects-page'),
    handler: function () {
        toggleActive('projects-link');
        nextAnchor = "contact-page";
    },
    offset: '50%'
});

var waypointProjectsBottom = new Waypoint({
    element: document.getElementById('projects-page'),
    handler: function () {
        toggleActive('projects-link');
        nextAnchor = "contact-page";
    }
});

var waypointContactTop = new Waypoint({
    element: document.getElementById('contact-page'),
    handler: function () {
        toggleActive('contact-link');
        nextAnchor = "main-page";
    },
    offset: '60%'
});

var waypointContactBottom = new Waypoint({
    element: document.getElementById('contact-page'),
    handler: function () {
        toggleActive('contact-link');
        nextAnchor = "main-page";
    }
});

window.onscroll = scrollCheck;