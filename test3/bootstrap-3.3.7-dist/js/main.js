/**
 * Created by Елена on 07.05.2017.
 */
;(function ($) {
    $(function () {

        $('.section-slider_slider').slick(
            {
                // arrows:true, //отключить стрелочки
                autoplay:true, //автоматически перелистівается
                autoplaySpeed:2000,//перелистівается с интервалом 1 с
                dots:true,//внизу точечки



            }
        );


    });

    $(function () {



        $('.section-slider_slider-two').slick(
            {
                dots: false,
                autoplay:true,
                autoplaySpeed:10000,
                slidesToShow: 3,
                slidesToScroll: 1
            }

        )

    });

})(jQuery);
