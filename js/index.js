$(function () {
    $(".goodsfl .li").mouseover(function () {
        $(this).children(".shouji").show();
    });
    $("div.goodsfl .li").mouseleave(function () {
        $(this).children(".shouji").hide();
    });
});