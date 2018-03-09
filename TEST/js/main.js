/**
 * Created by Елена on 31.08.2017.
 */
;(function ($) {
    $(function () {
        var item = $('#accordion li h3');
        item.on('click',function () {
            var $this  = $(this);
            $this.next('div').show(500)
                .siblings()
                .find('div')
                .hide(500);
        });

        $('.menu2')
            .on('click', function () {
                $('.modal__menu').addClass('opened')
                    .find('.modal__wrapper').delay(1000).slideDown();
            });
        $('.modal__wrapper .close')
            .on('click',function () {
                hideModal();
            });

        function hideModal() {
            $('.modal__menu').removeClass('opened')
                .find('.modal__wrapper')
                .hide();
        }
        window.onbeforeUnload = function (e) {
            e.preventDefault();
            e.stopPropagation();
            alert(234234);
            showModal();
        };

    });
    $(function () {


        $('.main_slider-one,.main_slider-two').slick(
            {
                arrows: true,
                dots: true,
                autoplay: true,
                autoplaySpeed: 10000,
                slidesToShow: 1,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1000,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1,
                            infinite: true
                        }
                    }
                ]
            }
        )

    });


})(jQuery);