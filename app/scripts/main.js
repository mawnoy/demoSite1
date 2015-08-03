require.config({
    paths: {
        jquery: '../bower_components/jquery/jquery',
        bootstrapAffix: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/affix',
        bootstrapAlert: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/alert',
        bootstrapButton: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/button',
        bootstrapCarousel: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/carousel',
        bootstrapCollapse: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/collapse',
        bootstrapDropdown: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/dropdown',
        bootstrapModal: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/modal',
        bootstrapPopover: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/popover',
        bootstrapScrollspy: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/scrollspy',
        bootstrapTab: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/tab',
        bootstrapTooltip: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/tooltip',
        bootstrapTransition: '../bower_components/bootstrap-sass/assets/javascripts/bootstrap/transition'
    },
    shim: {
        bootstrapAffix: {
            deps: ['jquery']
        },
        bootstrapAlert: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapButton: {
            deps: ['jquery']
        },
        bootstrapCarousel: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapCollapse: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapDropdown: {
            deps: ['jquery']
        },
        bootstrapModal:{
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapPopover: {
            deps: ['jquery', 'bootstrapTooltip']
        },
        bootstrapScrollspy: {
            deps: ['jquery']
        },
        bootstrapTab: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTooltip: {
            deps: ['jquery', 'bootstrapTransition']
        },
        bootstrapTransition: {
            deps: ['jquery']
        }
    }
});



// Bootstrap module controller
require(['bootstrapCollapse', 'bootstrapTab', 'bootstrapCarousel', 'bootstrapModal'], function () {
    'use strict';

    //login modal on click.
    $('#myModal').on('shown.bs.modal', function () {
        $('#myInput').focus();
    });

    console.log('start Bootstrap plugin');
});

// Navigation controller.
require(['jquery', 'nav'], function($, nav) {
    'use strict';

    var navbar = $('.navbar-fixed-top'),       // top navbar
        elemTrack = $('.navbar-main li');        // li in top-navbar

    nav.hidingOnScrollDown({
        navbar: navbar,
        jsClass: 'js-hide-navbar'
    });

    nav.breadCumTracking(elemTrack);

    // console.log('start Nav plugin');
});

// Search form controller
require(['search'], function(search) {
    'use strict';

    search.autoComplete();

    console.log('start search plugin');
});