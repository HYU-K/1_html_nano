$(document).ready(function(){
	$('.banner-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
	});

	$('.banner-gt-top').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: false,
		autoplaySpeed: 2000,
	});

	$('.newapp-mobile').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
	});

	$('.logo-mark').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		dots: false,
		arrows: true,
		autoplaySpeed: 2000,
		prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/button-left.png' alt=''></button>",
		nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/button-right.png' alt=''></button>",
	});

	$('.item-product-news').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: true,
		arrows: false,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		]
	});

	$('.item-product-liter').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: false,
		dots: false,
		arrows: false,
		autoplaySpeed: 2000,
		responsive: [
		{
			breakpoint: 500,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 400,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		]
	});

	$('.top-up').click(function(){
		$('html, body').animate({scrollTop : 100},1600);
		return false;
	});

	

	$('.item-slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		arrows: true,
		autoplaySpeed: 2000,
		prevArrow: "<button class='prev slick-prev'><img class='left-arrow ' src='./assets/img/button-left.png' alt=''></button>",
		nextArrow: "<button class='next slick-next'><img class='right-arrow ' src='./assets/img/button-right.png' alt=''></button>",
		responsive: [
		{
			breakpoint: 800,
			settings: {
				slidesToShow: 4,
				slidesToScroll: 1,
			}
		},
		{
			breakpoint: 500,
			settings: {
				arrows: false,
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 300,
			settings: {
				arrows: false,
				slidesToShow: 1,
				slidesToScroll: 1
			}
		},
		]
	});

	}); // jQuery load


$(function() {
	function slideMenu() {
		var activeState = $(".menu .menu-list").hasClass("active");
		$(".menu .menu-list").animate({left: activeState ? "0%" : "-100%"}, 400);
	}
	$(".menu-wrapper").click(function(event) {
		event.stopPropagation();
		$(".hamburger").toggleClass("open");
		$(".menu .menu-list").toggleClass("active");
		slideMenu();

		$("body").toggleClass("overflow-hidden");
	});

	$(".menu-list").find(".accordion-toggle").click(function() {


		$(".menu-list .accordion-content").not($(this).next()).slideUp("fast").removeClass("open");
		$(".menu-list .accordion-toggle").not(jQuery(this)).removeClass("active-tab").find(".menu-link").removeClass("active");
	});
}); // jQuery load


