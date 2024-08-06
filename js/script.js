/* 移除VIDEO的背景影片 */
$(function () {
    if ($(window).width() < 821) {
        $('#about video').remove();
    }
});