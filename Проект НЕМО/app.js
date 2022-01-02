$(document).ready(function() {
	var canvasButton = $('.canvas-button');
	var canvasMenu = $('.canvas-menu');
	var canvasInnerButton = $('.canvas-button_menu');


	var clicked = function() {
		if ( canvasMenu.hasClass('active')) {
			canvasMenu.removeClass('active');
			return;
		}

		canvasMenu.addClass('active')
	}

	canvasButton.click(clicked);
	canvasInnerButton.click(clicked);



	var $carousel = $('.owl-carousel');
	$carousel.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		autoplayTimeout: 5000,
		loop: true,
		autoplayHoverPause: true,
		autoplaySpeed: 2000
	});
});
