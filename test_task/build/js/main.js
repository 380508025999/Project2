/**
 * Created by Елена on 07.05.2017.
 //  */
;(function ($) {
    $(function () {

        //модальное окно
        $('#modal1')
            .on('click', function () {
                $('.modal-wrapper').addClass('opened')
                    .find('.modal').delay(1000).slideDown();
            });
        $('.modal .close')
            .on('click', function () {
                hideModal();
            });

        function hideModal() {
            $('.modal-wrapper').removeClass('opened')
                .find('.modal')
                .hide();
        }

        window.onbeforeUnload = function (e) {
            e.preventDefault();
            e.stopPropagation();
            alert(234234);
            showModal();
        };
    });
    $(document).ready(function () {

        $("#cities").click(function () {
            $(".menu__list").css('background', "rgba(0, 0, 0, 0.3)");
        }).focusout(function () {
            $(".menu__list").css('background', "none");
        }).focusout(function () {
            $(".menu__drop").css('opacity', "0");
        })
    });

})(jQuery);
