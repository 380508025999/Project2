;(function ($) {
    $(function () {
        $('.main-main-theport_grid').isotope({
            layoutMode: 'masonry',
            itemSeletor: '.grid-item',
            masonry: {

                columnWidth:5,
                gutter: 10
            }
        });
        $('.main-slider-inner').slick(
            {
                arrows:false, //отключить стрелочки
                autoplay:true, //автоматически перелистівается
                autoplaySpeed:10000,//перелистівается с интервалом 1 с
                dots:true,//внизу точечки
                appendArrows:$('i')


            }
        );

    });
    
    
    
})(jQuery);
