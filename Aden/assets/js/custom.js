$(document).ready(function () {
	$('.slide-bann-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear'
	});

	$('.item-sp-image').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: true,
		autoplaySpeed: 2000,
		infinite: true,
		speed: 500,
		fade: true,
		cssEase: 'linear',
	});


	$('.backtotop').click(function () {
		$('html, body').animate({ scrollTop: 100 }, 1600);
		return false;
	});


}); // jQuery load



