$(document).ready(function () {
	$('.eve').slick({
		dots: false,
		infinite: true,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 10000,
		slidesToShow: 1,
		centerMode: true,
		variableWidth: true
	});

	$('.header-banner-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: false,
		autoplaySpeed: 2000,
	});

	$('.item-slider-product-news').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/slick-prev.png' alt=''></button>",
		nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/slick-next.png' alt=''></button>",
	});

	$('.video-product').slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/slick-prev.png' alt=''></button>",
		nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/slick-next.png' alt=''></button>",

		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});


	$('.album-product').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/slick-prev.png' alt=''></button>",
		nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/slick-next.png' alt=''></button>",

		responsive: [
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});

	$('.top-up').click(function () {
		$('html, body').animate({ scrollTop: 100 }, 1600);
		return false;
	});

}); // jQuery load




$(function () {
	function slideMenu() {
		var activeState = $(".menu .menu-list").hasClass("active");
		$(".menu .menu-list").animate({ left: activeState ? "0%" : "-100%" }, 400);
	}
	$(".menu-wrapper").click(function (event) {
		event.stopPropagation();
		$(".hamburger").toggleClass("open");
		$(".menu .menu-list").toggleClass("active");
		slideMenu();

		$("body").toggleClass("overflow-hidden");
	});

	$(".menu-list").find(".accordion-toggle").click(function () {


		$(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
	});
}); // jQuery load



