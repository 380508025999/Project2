/**
 * Created by Елена on 18.04.2017.
 */
;(function ($) {
    $(function () {

        $('.aside-slider_slider').slick(
            {
                arrows:false, //отключить стрелочки
                autoplay:true, //автоматически перелистівается
                autoplaySpeed:2000,//перелистівается с интервалом 1 с
                dots:true,//внизу точечки
                appendArrows:$('i')


            }
        );

    });



})(jQuery);
