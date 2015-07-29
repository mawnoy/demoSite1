'use strict';

export function hideNavbar() {

    var doc           = $(document),
        navElem       = $('.navbar-fixed-top'),
        lastScrollTop = 0;

    doc.on('scroll', function() {

        var currentScrollTop = $(this).scrollTop(),
            isHide           = (currentScrollTop > lastScrollTop) ?
                               navElem.addClass('js-hide-navbar')
                               : navElem.removeClass('js-hide-navbar');

        lastScrollTop = currentScrollTop;
    });
}

export function breadCumTracking() {

    var currentActive = $('li.active'),
        liElem    = $('.navbar-main li');

    liElem.hover(function(){
        currentActive.removeClass('active');
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
        currentActive.addClass('active');
    });
}