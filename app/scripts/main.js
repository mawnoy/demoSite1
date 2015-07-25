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


// bootstrap module loading.
require(['bootstrapCollapse', 'bootstrapTab', 'bootstrapCarousel'], function () {
	'use strict';
	console.log('start bootstrap plugin');
});

// nav setting.
require(['jquery', 'nav'], function($, nav) {
	'use strict';

	nav.hideNavbar();
	nav.breadCum();

	console.log('start Nav plugin');
});
