let menu_list = {
    1: {
        "link": "index",
        "title": "Trang chủ",
    },
    2: {
        "link": "",
        "title": "Giới thiệu",
    },
    3: {
        "link": "02_sanpham",
        "title": "Kết quả nghiên cứu",
    },
    4: {
        "link": "04_chuyengia1",
        "title": "Chuyên gia",
    },
    5: {
        "link": "06_tintuc",
        "title": "Tin tức",
    },
    6: {
        "link": "",
        "title": "Hỏi đáp",
    },
    7: {
        "link": "",
        "title": "Liên hệ",
    },
};

let selection_header = {
    1: {
        "value": "select1",
        "title": "Danh mục kết quả nghiên cứu",
    },
    2: {
        "value": "select2",
        "title": "Danh mục kết quả nghiên cứu 1",
    },
    3: {
        "value": "select3",
        "title": "Danh mục kết quả nghiên cứu 1",
    },
    4: {
        "value": "select4",
        "title": "Danh mục kết quả nghiên cứu 1=n",
    },

}

$(document).ready(function () {
    $('.site41_head_col0_vcic').append(renderHeaderTop(), renderHeaderInput(), renderMenu());
})

let renderHeaderTop = () => {
    return '<section class="item-header-top"><div class="container">' +
        '<div class="row"><div class="header-contact"><ul>' +
        '<li class="header-tell"><a class="md3" href="" title="" style="text-decoration: none;"><span ><img src = "./assets/img/tell.png" alt = "" > </span>' +
        '(+84) 243 853 3333 </a> </li> <li> <a class="md3" href="" title = "" style="text-decoration: none;" >' +
        '<span><img src="./assets/img/mail.png" alt="" ></span>information @vietnamcic.org</a></li> </ul> </div> ' +
        '<div class="language"><ul><li> <a href="" title = ""> <img src="./assets/img/amrc.png" alt="" > </a></li>' +
        '<li class="vn"><a href="" title=""> <img src="./assets/img/vn.png" alt="" ></a></li></ul></div></div>';
}

let renderHeaderInput = () => {
    var header_input = ' <section class="item-header-input"><div class="container"><div class="row">' +
        '<div class="header-display"><div class="logo-top"><img src="./assets/img/VCIC.png" alt=""></div>' +
        '<div class="item-recta"><div class="soe"><select class="luachon">';
    var search = '<span class="search"><input type="text" name="search" placeholder="Từ khóa tìm kiếm..."><button type="submit"><img src="./assets/img/search.png" alt=""></button></span>';
    var cart = '<div class="cart"><a href="" title=""></a><img src="./assets/img/store.png" alt=""><span>0</span></div>';
    var login = '<div class="login"><a href="" title="" class="conten md2">Đăng ký</a><a href="" title="" class="log_in md2">Đăng nhập</a><a href="" title=""><img src="./assets/img/login.png" alt=""></a></div>';
    $.each(selection_header, function (index, value) {
        header_input += '<option value="' + value.value + '">' + value.title + '</option>';
    })

    header_input += '</select></div>' + search + '</div>' + cart + login + '</div></div></div></section>';
    return header_input;
}

let renderMenu = () => {
    var menu = '<section class="item-header-menu-top"><div class="container"><div class="row"><div class="menu-top"><div class="menu-wrapper"><div class="hamburger"><span></span><span></span><span></span></div></div>';
    var list = '<ul class="menu-list accordion"><li class="logo-menu"><a href="" title=""><img src="./assets/img/VCIC.png" alt=""></a></li>';
    var search_box = '<div class="search-box"><input type="text" placeholder=" " /><span></span></div>';
    var btn_buy = '<div class="item-popup"><a href="#popup1" title="" class="btn btn_header btn_sw">Đặt mua</a></div>'
    $.each(menu_list, function (index, value) {
        list += '<li><a class="menu1 md2_1" href="' + value.link + '.html" title="">' + value.title + '</a></li>'
    })
    menu += list + '</ul></div>' + search_box + btn_buy + '</div></section>';
    return menu;
}




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