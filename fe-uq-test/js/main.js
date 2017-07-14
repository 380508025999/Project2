/**
 * Created by Елена on 07.05.2017.
 */
;(function ($) {
    $(function () {

        $('.slider1').slick(
            {
                // arrows:true, //отключить стрелочки
                autoplay: true, //автоматически перелистівается
                autoplaySpeed: 20000,//перелистівается с интервалом 1 с
                dots: true,//внизу точечки


            }
        );


    });


    $(function () {


        $('.section__slide').slick(
            {
                arrows: false,
                dots: true,
                autoplay: true,
                autoplaySpeed: 1000,
                slidesToShow: 3,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1400,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 1200,
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


    window.onload = function () {
        var map,
            point = {lat: -7.926233, lng: 112.632564}


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
    };


    $(document).ready(function () {

        $(".head__burger").click(function () {
            // $(".head__search").css('display', "block").css('margin-left',"-552px");
            $(".head__menu").slideToggle(500);
            $(window).resize(function () {
                if ($(window).width() > 1020) {
                    $(".head__menu").removeAttribute('style');
                }
            });


        });


    });
    $(document).ready(function () {
        $('.head__list2').click(function () { // ловим клик по ссылке с классом go_to
            console.log('start');
            //var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            var scroll_el = $('.section__slider'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

            console.log(scroll_el);
            console.log(scroll_el.length);

            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                console.log('start 2');
                $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 2000); // анимируем скроолинг к элементу scroll_el
            } else {
                console.log('start 3');
            }
            return false; // выключаем стандартное действие
        });
    });
    $(document).ready(function () {
        $('#contact').click(function () { // ловим клик по ссылке с классом go_to
            console.log('start');
            //var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            var scroll_el = $('.footer__title'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

            console.log(scroll_el);
            console.log(scroll_el.length);

            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                console.log('start 2');
                $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 2000); // анимируем скроолинг к элементу scroll_el
            } else {
                console.log('start 3');
            }
            return false; // выключаем стандартное действие
        });
    });
})(jQuery);
