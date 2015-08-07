 /*jshint unused:false*/

'use strict';

export function hidingOnScrollDown(prop) {

    prop = prop || {};

    const doc = $(document);            // elem to scroll

    var navbar = prop.navbar,
        jsClass = prop.jsClass || 'js-hide-navbar',     // default class name to toggle
        lastScroll = 0;

    doc.on('scroll', function() {

        var curScroll = doc.scrollTop(),

            direction = (curScroll > lastScroll) ?
            navbar.addClass(jsClass) :
            navbar.removeClass(jsClass);

        lastScroll = curScroll;
    });
}

export function breadCumTracking(elemTack) {

    var currentActive = $('li.active');


    elemTack.hover(function(){
        currentActive.removeClass('active');
        $(this).addClass('active');
    }, function() {
        $(this).removeClass('active');
        currentActive.addClass('active');
    });
}
