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
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 970,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2,
                            infinite: true
                        }
                    },
                    {
                        breakpoint: 750,
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
    $(document).ready(function(){
        $('.about').click( function(){ // ловим клик по ссылке с классом go_to
            console.log('start');
            //var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            var scroll_el = $('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

            console.log(scroll_el);
            console.log(scroll_el.length);

            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                console.log('start 2');
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // анимируем скроолинг к элементу scroll_el
            }else{
                console.log('start 3');
            }
            return false; // выключаем стандартное действие
        });
    });
    $(document).ready(function(){
        $('.serv').click( function(){ // ловим клик по ссылке с классом go_to
            console.log('start');
            //var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            var scroll_el = $('.main-grid'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

            console.log(scroll_el);
            console.log(scroll_el.length);

            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                console.log('start 2');
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // анимируем скроолинг к элементу scroll_el
            }else{
                console.log('start 3');
            }
            return false; // выключаем стандартное действие
        });
    });
    $(document).ready(function(){
        $('.work').click( function(){ // ловим клик по ссылке с классом go_to
            console.log('start');
            //var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            var scroll_el = $('.section-slider'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

            console.log(scroll_el);
            console.log(scroll_el.length);

            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                console.log('start 2');
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // анимируем скроолинг к элементу scroll_el
            }else{
                console.log('start 3');
            }
            return false; // выключаем стандартное действие
        });
    });
    $(document).ready(function(){
        $('.contact').click( function(){ // ловим клик по ссылке с классом go_to
            console.log('start');
            //var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
            var scroll_el = $('.section-slider_two'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .

            console.log(scroll_el);
            console.log(scroll_el.length);

            if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
                console.log('start 2');
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 2000); // анимируем скроолинг к элементу scroll_el
            }else{
                console.log('start 3');
            }
            return false; // выключаем стандартное действие
        });
    });

    $(document).ready(function(){
        $('#fly-block1_icon').click(function(){
            $(this).parent().children('div#fly-block1_text').toggle('normal');
            return false;
        });
    });
    $(document).ready(function(){
        $('#fly-block2_icon').click(function(){
            $(this).parent().children('div#fly-block2_text').toggle('normal');
            return false;
        });
    });

})(jQuery);
