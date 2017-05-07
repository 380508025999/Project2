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



})(jQuery);
