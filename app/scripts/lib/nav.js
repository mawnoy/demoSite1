'use strict';

export function hideNavbar(navElem) {

	var navElem = $('.navbar-custom');
	var lastScrollTop = 0;
	var documentElem = $(document);

	documentElem.on('scroll', function() {

		var currentScrollTop = $(this).scrollTop();
		var isHide = currentScrollTop > lastScrollTop ? navElem.addClass('js-hide-navbar') : navElem.removeClass('js-hide-navbar');

		lastScrollTop = currentScrollTop;
	});
}

export function breadCum() {

	var tmpActive = $('li.active');
	var liElem = $('.navbar-main li');

	liElem.hover(function(){
		liElem.removeClass('active');
		$(this).addClass('active');
	}, function() {
		$(this).removeClass('active');
		tmpActive.addClass('active');
	});
}