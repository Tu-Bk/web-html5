/* $ → 代表 抓元素的意思 */
$(function () {/*← document ready 一個JS檔只要有寫一次就可以 */

    /* 移除VIDEO的背景影片 */
    if ($(window).width() < 821) {
        $('#about video').remove();
    }

    //交替漢堡按鈕
    $('.hamburger').click(function () {
        /* .hamburger 交替切換 .is-active */
        $(this).toggleClass('is-active');
        /* .navihation 交替切換 .show */
        $('.navihation').toggleClass('show');
    });

    /* 滑動到指定位置 */
    $('.menu a').click(function () {
        let btn = $(this).attr('href');/* attr => 代表屬性的意思 */
        let pos = $(btn).offset();/* offset => 抓相對定位的座標位置 */
        $('html,body').animate({ scrollTop: pos.top }, 1000);
        /* animate =>代表動畫的意思   scrollTop => 代表卷軸的意思   1000 => 代表1秒的意思*/
    });


    /* 滑動至頂 */
    $('#gotop').click(function () {
        $('html,body').animate({ scrollTop: 0 }, 1000);
    });


    /* 至頂按鈕淡出淡入 */
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('#gotop').stop().fadeTo('fast', 1);
        } else {
            $('#gotop').stop().fadeOut('fast');
        }
    });


});


/* JQuery Smoove */
$('.smoove').smoove({
    offset: '20%',
});