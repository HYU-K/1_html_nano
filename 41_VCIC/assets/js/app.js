let menu_list = {
    1: {
        "link": "",
        "title": "Trang chủ",
    },
    2: {
        "link": "",
        "title": "Giới thiệu",
    },
    3: {
        "link": "",
        "title": "Kết quả nghiên cứu",
    },
    4: {
        "link": "",
        "title": "Chuyên gia",
    },
    5: {
        "link": "",
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

$(document).ready(function () {
    $('#main_menu').append(renderMenu());
})

let renderMenu = () => {
    var menu = '<div class="row"> <div class="container">';
    var list = '<ul class="main">';
    var btn_buy = '<div class="item-popup"><a href="#popup1" title="" class="btn btn_header btn_sw">Đặt mua</a></div>'
    $.each(menu_list, function (index, value) {
        list += '<li><a class="menu1" href="' + value.link + '.html" title="">' + value.title + '</a></li>'
    })
    menu += list + '</ul>' + btn_buy + '</div></div>';
    return menu;
}