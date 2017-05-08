/**
 * Created by Елена on 07.05.2017.
 */
;(function ($) {


        $(window).scroll(function () {
            if ($(this).scrollTop() > 0) {
                $('.learn-more').fadeIn();
            } else {
                $('.learn-more').fadeOut();
            }
        });
    $('.learn-more').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 2000);
        return false;
    });

})(jQuery);
