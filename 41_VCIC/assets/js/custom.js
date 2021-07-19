$(document).ready(function () {
	$('.slide-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		dots: true,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: false,
	});

$('.news-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: true,
		infinite: true,
		speed: 500,
		fade: false,
	});

$('.slide-six').slick({
		slidesToShow: 6,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		arrows: false,
		infinite: true,
		speed: 500,
		fade: false,
		responsive: [
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		]
	});

	

	$(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.item-header-input').addClass('croll');
		}
		else {
			$('.item-header-input').removeClass('croll');
		}
		if (pos_body > 900) {
			$('.backtotop').addClass('show');
		}
		else {
			$('.backtotop').removeClass('show');
		}
	});
	$(function () {
		new WOW().init();
	})


}); // jQuery load



$(function () {
	function slideMenu() {
		var activeState = $(".menu-top .menu-list").hasClass("active");
		$(".menu-top .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
	}
	$(".menu-wrapper").click(function (event) {
		event.stopPropagation();
		$(".hamburger").toggleClass("open");
		$(".menu-top .menu-list").toggleClass("active");
		slideMenu();

		$("body").toggleClass("overflow-hidden");
	});

	$(".menu-list").find(".accordion-toggle").click(function () {


		$(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
	});
}); // jQuery load