$(".canhanflex .canhan").click(function(){
    $(".chuyengia_1").removeClass("active");
    $(".canhan").addClass("active");
    $('.form_canhan').addClass('active');
    $('.form_chuyengia').removeClass('active');

});
$(".canhanflex .chuyengia_1").click(function(){
    $(".canhan").removeClass("active");
    $(".chuyengia_1").addClass("active");
    $('.form_chuyengia').addClass('active');
    $('.form_canhan').removeClass('active');
});
$(".icon_open_menu").click(function(){
    $(".pro_left").addClass("active");
    $(".icon_open_menu1").addClass("active");
    $(".bghome").addClass("active");
});
$(".icon_open_menu1").click(function(){
    $(".pro_left").removeClass("active");
    $(".icon_open_menu1").removeClass("active");
    $(".bghome").removeClass("active");
});