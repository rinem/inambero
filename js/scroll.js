$(document).ready(function () {
    // Init Sidenav
    $('.button-collapse').sideNav();

    // Init Scrollspy
    $('.scrollspy').scrollSpy();

    // ScrollFire
    const options = [{
            selector: '.main-text',
            offset: 0,
            callback: function (el) {
                Materialize.fadeInImage($(el));
            }
        },
        {
            selector: '.navbar-fixed',
            offset: 1500,
            callback: function () {
                $('nav').removeClass('transparent');
                $('nav').addClass('blue-grey darken-3');
            }
        }
    ];

    Materialize.scrollFire(options);

});