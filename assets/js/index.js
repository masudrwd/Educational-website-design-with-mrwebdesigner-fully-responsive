$(document).ready(function () {

    $('.bars').click(function () {
       $(this).toggleClass('bar-toggler'); 
       $('.nav-bar').toggleClass('nav-show'); 
    });

    $('.nav-links').click(function () {
       $('.bars').removeClass('bar-toggler'); 
       $('.nav-bar').removeClass('nav-show'); 
    });

    $(window).on('scroll load', function () {
        $('.bars').removeClass('bar-toggler');
        $('.nav-bar').removeClass('nav-show');

        if ($(window).scrollTop() > 30) {
            $('header').addClass('header-nav');
        } else {
            $('header').removeClass('header-nav');
        };
    });

    var scroll = new SmoothScroll('a[href*="#"]', {
        speed: 600,
        speedAsDuration: true
    });

    new WOW().init();

});