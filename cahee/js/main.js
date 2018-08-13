/**
 * Created by Елена on 15.03.2018.
 */
;(function ($) {

    $(document).ready(function () {


        $(".nav-bar").click(function () {
            $('.nav-open').css("-webkit-transition","all 0.5s ease");
            $(".nav-open").css('display', "block");

        })


            .focusout(function () {
                $(".nav-open").css('display', "none");
            });
        $(".nav-bar").click(function () {
            $('.header_menu').css("-webkit-transition","all 0.5s ease").fadeIn;
            $(".header_menu").css('background', "white").fadeIn( "slow" );

        })


            .focusout(function () {
                $(".header_menu").css('background', "none");
            })

    });

    $(function () {

        $("#slider-range").slider({
            range: true,
            min: 18,
            max: 50,
            values: [18, 23],
            step: 1,
            slide: function (event, ui) {
                $("#price").val(ui.values[0] + " - " + ui.values[1]);
            }
        });
        $("#price").val($("#slider-range").slider("values", 0) +
            " - " + $("#slider-range").slider("values", 1));

    });
    $(function () {

        $('.down').click(function () {
            $('html, body').animate({scrollTop: 0}, 2000);
            return false;
        })

    });

})(jQuery);
