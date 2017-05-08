/**
 * Created by Елена on 07.05.2017.
 */
;(function ($) {
    $(function () {

        $('.section-slider_slider').slick(
            {
                // arrows:true, //отключить стрелочки
                autoplay: true, //автоматически перелистівается
                autoplaySpeed: 2000,//перелистівается с интервалом 1 с
                dots: true,//внизу точечки


            }
        );


    });

    $(function () {


        $('.section-slider_slider-two').slick(
            {
                dots: false,
                autoplay: true,
                autoplaySpeed: 10000,
                slidesToShow: 3,
                slidesToScroll: 1
            }
        )

    });


        window.onload = function () {
            var map,
                point = {lat:-7.926233, lng: 112.632564}


            function initMap() {
                map = new google.maps.Map(document.getElementById('map'), {
                    center: point,
                    zoom: 16,
                    disableDefaultUI: true //чтобы наши элемены управления исчезли
                });
                var image = {
                    url: 'Pin.png',
                    // size: new google.maps.Size(20,32)
                }
                var marker = new google.maps.Marker({
                    position: point,
                    map: map,
                    icon: image
                });

            }

            initMap();
        }

    $(window).scroll(function () {
        if ($(this).scrollTop() > 0) {
            $('.form-scroll').fadeIn();
        } else {
            $('.form-scroll').fadeOut();
        }
    });
    $('.form-scroll').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });
})(jQuery);
