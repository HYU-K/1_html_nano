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


	$(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.side40_bann_col10_aden').addClass('croll');
		}
		else {
			$('.side40_bann_col10_aden').removeClass('croll');
		}
		if (pos_body > 900) {
			$('.backtotop').addClass('show');
		}
		else {
			$('.backtotop').removeClass('show');
		}
	});


}); // jQuery load



