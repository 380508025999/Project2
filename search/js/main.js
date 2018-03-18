/**
 * Created by Елена on 15.03.2018.
 */
;(function ($) {

    $(document).ready(function () {

        $(".photo-profile").click(function () {

            $(".photo-profile").css('background', "#f0f0f0");

        });

        $(".photo-profile").click(function () {

            $(".top-profile-menu").css('opacity', "1");
        })
            .focusout(function () {
                $(".photo-profile").css('background', "none");
            })
            .focusout(function () {
                $(".top-profile-menu").css('opacity', "0");
            });
        $(".one").click(function () {

            $(".one-favourite").css('display', "none");

        });

        $(".one").click(function () {

            $(".one-favourite-in").css('display', "block");
        });

        $(".two").click(function () {

            $(".two-favourite").css('display', "none");

        });

        $(".two").click(function () {

            $(".two-favourite-in").css('display', "block");
        });
        $(".three").click(function () {

            $(".three-favourite").css('display', "none");

        });

        $(".three").click(function () {

            $(".three-favourite-in").css('display', "block");
        });
        $(".five").click(function () {

            $(".five-favourite").css('display', "none");

        });

        $(".five").click(function () {

            $(".five-favourite-in").css('display', "block");
        });
        $(".six").click(function () {

            $(".six-favourite").css('display', "none");

        });

        $(".six").click(function () {

            $(".six-favourite-in").css('display', "block");
        });
        $(".seven").click(function () {

            $(".seven-favourite").css('display', "none");

        });

        $(".seven").click(function () {

            $(".seven-favourite-in").css('display', "block");
        });
        $(".eight").click(function () {

            $(".eight-favourite").css('display', "none");

        });

        $(".eight").click(function () {

            $(".eight-favourite-in").css('display', "block");
        });
    $(".drop-down_menu").click(function () {
        $(".header_list-burger").css('display', "block");
    })

        .focusout(function () {
            $(".header_list-burger").css('display', "none");
        })

});
    $(".search-option_online").click(function () {

        $(".offline").css('display', "none");

    });
    $(".search-option_new").click(function () {

        $(".offline").css('display', "block");

        $(".not-favorite").css('display', "block");

    });
    $(".search-option_popular").click(function () {

        $(".not-favorite").css('display', "none");

    });
    $(function(){

        $( "#slider-range" ).slider({
            range: true,
            min: 18,
            max: 50,
            values: [ 18, 23 ],
            step: 1,
            slide: function( event, ui ) {
                $( "#price" ).val(  ui.values[ 0 ] +" - "  + ui.values[ 1 ] );
            }
        });
        $( "#price" ).val( $( "#slider-range" ).slider( "values", 0 ) +
            " - " + $( "#slider-range" ).slider( "values", 1 ) );

    });
    $(function() {

        $('.down').click(function() {
            $('html, body').animate({scrollTop: 0},2000);
            return false;
        })

    });

})(jQuery);
