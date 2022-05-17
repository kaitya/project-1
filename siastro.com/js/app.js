$(document).ready(function () {

    /* Checkbox стили при checked */
    $(".form-checkbox-input").change(function () {
        if (this.checked) {
            $(this).parents().addClass('checked');
        } else {
            $(this).parents().removeClass('checked');
        }
    });

    /* Переключение пола (муж/жен) */

    $(".gender-toggle").each(function () {
        $(this).click(function () {
            $(this).toggleClass("active");
            $(this).siblings().toggleClass("active");
            $(this).parents().toggleClass("purple pink");
        });
    });

    /* Открытие выпадающего списка */

    $(".input-select-city").each(function () {
        $(this).focusin(function () {
            $(this).siblings().addClass('shown');
        });
        $(this).focusout(function () {
            $(this).siblings().removeClass('shown');
        });
    });

});