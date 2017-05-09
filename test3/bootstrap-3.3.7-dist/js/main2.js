/**
 * Created by Елена on 08.05.2017.
 */

;(function ($) {
$(function () {

    $('.about').click(function () { // ловим клик по ссылке с классом go_to
        var scroll_el = $(this).attr('.main-content'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length != 0) { // проверим существование элемента чтобы избежать ошибки
            $('html, body').animate({scrollTop: $(scroll_el).offset().top}, 500); // анимируем скроолинг к элементу scroll_el
        }
        return false; // выключаем стандартное действие
    });


})

})(jQuery);