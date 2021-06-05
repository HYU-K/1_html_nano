$(document).ready(function() {
	$('.slider-list').slick({
	  dots: false,
	  infinite: true,
	  autoplay: false,
	  autoplaySpeed: 0,
	  speed: 10000,
	  slidesToShow: 1,
	  centerMode: true,
	  variableWidth: true
	});

	$('.logo').click(function() {
		$('.top-header').toggleClass('active')
	});

})


$(function() {
  function slideMenu() {
    var activeState = $(".menu .menu-list").hasClass("active");
    $(".menu .menu-list").animate({right: activeState ? "0%" : "-100%"}, 400);
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
