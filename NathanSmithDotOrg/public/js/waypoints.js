function toggleActive(anchor) {
    var all = document.querySelectorAll('.n-nav-link');
    for (var each of all) {
        each.classList.remove('is-active');
    }
    var thisOne = document.getElementById(anchor);
    thisOne.classList.add('is-active');
}

var waypointMain = new Waypoint({
    element: document.getElementById('main-page'),
    handler: function () {
        var all = document.querySelectorAll('.n-nav-link');
        for (var each of all) {
            each.classList.remove('is-active');
        }
    }
})

var waypointAboutTop = new Waypoint({
    element: document.getElementById('about-page'),
    handler: function () {
        toggleActive('about-link');
    },
    offset: '50%'
});

var waypointAboutBottom = new Waypoint({
    element: document.getElementById('about-page'),
    handler: function () {
        toggleActive('about-link');
    }
});

var waypointProjectsTop = new Waypoint({
    element: document.getElementById('projects-page'),
    handler: function () {
        toggleActive('projects-link');
    },
    offset: '50%'
});

var waypointProjectsBottom = new Waypoint({
    element: document.getElementById('projects-page'),
    handler: function () {
        toggleActive('projects-link');
    }
});

var waypointContactTop = new Waypoint({
    element: document.getElementById('contact-page'),
    handler: function () {
        toggleActive('contact-link');
    },
    offset: '60%'
});

var waypointContactBottom = new Waypoint({
    element: document.getElementById('contact-page'),
    handler: function () {
        toggleActive('contact-link');
    }
});