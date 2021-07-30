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
		slidesToScroll: 2,
		autoplay: true,
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
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 800,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 500,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				}
			},
			{
				breakpoint: 400,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 2,
				}
			},
		]
	});





	$('.slider-single').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		adaptiveHeight: true,
		infinite: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
	});

	$('.slider-nav')
		.on('init', function (event, slick) {
			$('.slider-nav .slick-slide.slick-current').addClass('is-active');
		})
		.slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			focusOnSelect: false,
			infinite: false,
			responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 640,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 576,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			}, {
				breakpoint: 420,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			}]
		});




	$('.title_it_content').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		adaptiveHeight: true,
		infinite: false,
		useTransform: true,
		speed: 400,
		cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
		responsive: [{
			breakpoint: 640,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 576,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}, {
			breakpoint: 220,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
			}
		}]
	});


	$(function () {
		var w = $(window).width();
		var h = $(window).height();

		var duration = 2000,
			el = $(".contents"),
			elem = $(".contents .content");

		elem.eq(0).addClass("z-index");

		contentl = elem.length;





		$("nav a").click(function () {
			var index = $(this).index();
			var d = index * (360 / contentl);

			$("nav a").removeClass("active");
			$(this).addClass("active");

			elem.removeClass("z-index");
			elem.eq(index).addClass("z-index");

		})

	});






	$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
		$('.slider-nav').slick('slickGoTo', currentSlide);
		var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index="' + currentSlide + '"]';
		$('.slider-nav .slick-slide.is-active').removeClass('is-active');
		$(currrentNavSlideElem).addClass('is-active');
	});

	$('.slider-nav').on('click', '.slick-slide', function (event) {
		event.preventDefault();
		var goToSingleSlide = $(this).data('slick-index');

		$('.slider-single').slick('slickGoTo', goToSingleSlide);
	});

	$(window).scroll(function (event) {
		var pos_body = $('html,body').scrollTop();
		// console.log(pos_body);
		if (pos_body > 20) {
			$('.item-header-input').addClass('croll');
			$('.menu-wrapper').addClass('croll_menu');
		}
		else {
			$('.item-header-input').removeClass('croll');
			$('.menu-wrapper').removeClass('croll_menu');
		}
		if (pos_body > 300) {
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