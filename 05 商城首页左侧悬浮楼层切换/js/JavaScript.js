/* 左侧固定导航 开始 */
$(function () {
    var AllHet = $(window).height();
    var mainHet = $('.floatCtro').height();
    var fixedTop = (AllHet - mainHet) / 2
    //  $('div.floatCtro').css({top:fixedTop+'px'}); 
    $('div.floatCtro p').click(function () {
        var ind = $('div.floatCtro p').index(this) + 1;
        var topVal = $('#' + ind + 'f').offset().top;
        $('body,html').animate({ scrollTop: topVal }, 1000)
    })
    $('div.floatCtro a').click(function () {
        $('body,html').animate({ scrollTop: 0 }, 1000)
    })
    $(window).scroll(scrolls)
    scrolls()
    function scrolls() {
        var f1, f2, f3, f4, f5, f6, f7, f8, f9, bck;
        var fixRight = $('div.floatCtro p');
        var blackTop = $('div.floatCtro a')
        var sTop = $(window).scrollTop();
        fl = $('#1f').offset().top;
        f2 = $('#2f').offset().top;
        f3 = $('#3f').offset().top;
        f4 = $('#4f').offset().top;
        f5 = $('#5f').offset().top;
        f6 = $('#6f').offset().top;
        f7 = $('#7f').offset().top;
        f8 = $('#8f').offset().top;
        f9 = $('#9f').offset().top;

        if (sTop >= fl - 250) {
            $(".floatCtro").css("display", "block");
        }
        else {
            $(".floatCtro").css("display", "none");
        }

        if (sTop >= fl - 50) {
            fixRight.eq(0).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("一卡通");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }

        if (sTop >= f2 - 100) {
            fixRight.eq(1).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("视频监控");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f3 - 100) {
            fixRight.eq(2).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("报警探测");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f4 - 100) {
            fixRight.eq(3).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("消防设备");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f5 - 100) {
            fixRight.eq(4).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("交通设施");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f6 - 100) {
            fixRight.eq(5).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("安保设备");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f7 - 100) {
            fixRight.eq(6).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("劳动保护");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f8 - 100) {
            fixRight.eq(7).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("人身财产保障");
            fixRight.eq(8).text("9F");
        }
        if (sTop >= f9 - 100) {
            fixRight.eq(8).addClass('cur').siblings().removeClass('cur');
            fixRight.eq(0).text("1F");
            fixRight.eq(1).text("2F");
            fixRight.eq(2).text("3F");
            fixRight.eq(3).text("4F");
            fixRight.eq(4).text("5F");
            fixRight.eq(5).text("6F");
            fixRight.eq(6).text("7F");
            fixRight.eq(7).text("8F");
            fixRight.eq(8).text("推荐商家");
        }
        if (sTop >= f9 + 100) {
            $(".floatCtro").css("display", "none");
        }

    }

    $(document).ready(function () {
        var Left_Width = ($(window).width() - 1190) / 2 - 70;
        //var Left_Width1 = Left_Width - 70;
        $(".floatCtro").css("left", Left_Width);
    })

})
/* 左侧固定导航 结束 */