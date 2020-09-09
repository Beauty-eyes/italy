/* parallax */
// $(document).ready(function () {
//     $('.l_1').scrolly();
//     $('.l_2').scrolly();
//     $('.l_3').scrolly();
//     $('.l_4').scrolly();
//     $('.l_5').scrolly();
//     $('.l_6').scrolly();
//     $('.l_7').scrolly();
//     $('.l_8').scrolly();
//     $('.l_9').scrolly();
//     $('.l_10').scrolly();
//     $('.l_11').scrolly();
//     $('.l_12').scrolly();
//     $('.l_13').scrolly();
//     $('.l_14').scrolly();
//     $('.l_15').scrolly();
//     $('.l_16').scrolly();
// });
/* end parallax */

/* animation */
// $(document).ready(function () {
//     $(window).scroll(function () {
//         var bo = $(window).scrollTop();
//         // if (bo > 250)
//         //     $(".title_button").addClass("animated fadeInRight visible");
//         if (bo > 251)
//             $(".title").addClass("animated fadeIn visible");
//         if (bo > 400)
//             $(".reason").addClass("animated bounceInDown visible");
//         if (bo > 1700)
//             $(".animate_txt").addClass("animated fadeInLeft visible");
//         if (bo > 2900)
//             $(".section_six_right_wrap").addClass("animated fadeInRight visible");
//         if (bo > 4250)
//             $(".section_eight_wrap_orange").addClass("animated fadeInRight visible");
//         if (bo > 7700)
//             $(".secton_thirteen_photo").addClass("animated fadeIn visible");
//         if (bo > 7701)
//             $(".secton_thirteen_text_wrap").addClass("animated fadeInDown visible");
//         if (bo > 8800)
//             $(".secton_fourteen_title_left").addClass("animated fadeInLeft visible");
//         if (bo > 8801)
//             $(".secton_fourteen_title_right").addClass("animated fadeInRight visible");
//     })
// })
/* end animation */


/* timer*//*
$(document).ready(function () {
    var date = new Date();
    var dateObj = new Date(date.getFullYear(), date.getMonth() + 1, date.getDate(), date.getHours(), 2400 - date.getMinutes());
    function get_timer() {
        date = new Date();
        var timer = dateObj - date;
        var day;
        var hour;
        var min;
        var sec;
        if (dateObj > date) {
            hour = parseInt(timer / (60 * 60 * 1000)) % 24;
            if (hour < 10) {
                hour = '0' + hour;
            }
            hour = hour.toString();

            min = parseInt(timer / (1000 * 60)) % 60;
            if (min < 10) {
                min = '0' + min;
            }
            min = min.toString();

            sec = parseInt(timer / 1000) % 60;
            if (sec < 10) {
                sec = '0' + sec;
            }
            sec = sec.toString();
        } else {
            day = '00';
            hour = '00';
            min = '00';
            sec = '00';
        }
        $('.hour').text(hour);
        $('.min').text(min);
        $('.sec').text(sec);
    }
    var timer = setInterval(function () {
        get_timer();
    }, 500);
});*/
$(document).ready(function() {
    var clock;

    clock = $('.digits').FlipClock({
        clockFace: 'HourlyCounter',
        autoStart: false
    });

    clock.setTime(900);
    clock.setCountdown(true);
    clock.start();


});
/* end timer*/

/* toform*/
$(document).ready(function () {
    $('.toform').click(function (e) {
        e.preventDefault();
        var a = $('.js_submit'), b = a.closest('form');
        if ($('form#toform').length) a = $('#toform .js_submit'), b = a.closest('form#toform');
        if (b.length && a.is(':visible')) {
            $("html,body").animate({ scrollTop: b.offset().top }, 1000);
        }
        return false;
    });
});
/* end toform*/

/* nav scroll*/
$(document).ready(function () {
    $("#menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });
});
/* end nav scroll*/

