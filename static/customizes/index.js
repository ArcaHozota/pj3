$(document).ready(function() {
    adjustPadding();
    $("#worshipTimePage").hide();
    $("#schoolPage").hide();
    $("#introductionPage").hide();
    $("#rekishiPage").hide();
    $("#homeBtn").addClass('active');
    // 获取按钮元素
    const $backToTopButton = $("#backToTop");
    // 监听滚动事件
    $(window).on("scroll", function () {
        // 页面滚动超过300px时显示按钮，否则隐藏
        if ($(this).scrollTop() > 300) {
            $backToTopButton.addClass('show');
        } else {
            $backToTopButton.removeClass('show');
        }
    });
    // 点击按钮，平滑滚动回到顶部
    $backToTopButton.on("click", function () {
        $('html, body').animate({ scrollTop: 0 }, 'smooth'); // 平滑滚动效果
    });
});
$(window).resize(adjustPadding);
$("#homeBtn").on("click", function(e) {
    e.preventDefault();
    $("#worshipTimeBtn").removeClass('active');
    $("#schoolBtn").removeClass('active');
    $("#introductionBtn").removeClass('active');
    $("#rekishiBtn").removeClass('active');
    $(this).addClass('active');
    $("#worshipTimePage").hide();
    $("#schoolPage").hide();
    $("#introductionPage").hide();
    $("#rekishiPage").hide();
    $("#homePage").show();
});
$("#worshipTimeBtn").on("click", function(e) {
    e.preventDefault();
    $("#homeBtn").removeClass('active');
    $("#schoolBtn").removeClass('active');
    $("#introductionBtn").removeClass('active');
    $("#rekishiBtn").removeClass('active');
    $(this).addClass('active');
    $("#homePage").hide();
    $("#schoolPage").hide();
    $("#introductionPage").hide();
    $("#rekishiPage").hide();
    $("#worshipTimePage").show();
});
$("#mainIcon").on("click",function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'smooth'); // 平滑滚动效果
});
$("#backToTopIcon").on("click",function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 'smooth'); // 平滑滚动效果
});
function adjustPadding() {
    const $fixedTop = $('.fixed-top');
    if ($fixedTop.length) {
        $('body').css('padding-top', $fixedTop.outerHeight() + 'px');
    }
}