$(document).ready(function () {

    /* Табы */
    if (window.matchMedia("(min-width: 768px)").matches) {

        $(function () {
            $(".tabs-btn-wrap").on("click", ".tabs-btn:not(.active)", function () {
                $(this)
                    .addClass("active")
                    .siblings()
                    .removeClass("active")
                    .closest("div.tabs")
                    .find("div.tabs-content")
                    .removeClass("active")
                    .eq($(this).index())
                    .addClass("active");
            });
        });

    }
    /* Переключение пола (муж/жен) */

    $(".gender-toggle").each(function () {
        $(this).click(function () {
            $(this).toggleClass("active");
            $(this).siblings().toggleClass("active");
            $(this).parents().toggleClass("purple pink");
        });
    });

    /* Кнопка на моб. устройствах скрыть/показать текст на главной */
    $('#show-main-description').on("click", function () {
        $('#main-description').toggle();
        $(this).text(function (i, text) {
            return text === "Читать подробнее" ? "Скрыть" : "Читать подробнее";
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


    /* Checkbox */

    $(function () {
        $(".form-checkbox-input").change(function () {
            if ($(this).prop('checked') == true) {

                $(this).parents().find('.select-birth-time').attr('disabled', 'disabled');
                $(this).parent().addClass('checked');
                $(this).closest('.form-item').find('.birth-time-select').attr('disabled', 'disabled');

            } else if ($(this).prop('checked') == false) {
                $(this).parents().find('.select-birth-time').removeAttr('disabled');
                $(this).parent().removeClass('checked');
                $(this).closest('.form-item').find('.birth-time-select').removeAttr('disabled');
                $(this).closest('.form-item').find('.birth-time-select').removeAttr('disabled');
            }
        });
    });

    /* Popup Window */
    $('.popup-close').on("click", function () {
        $('.popup').hide();
    });
    $('.popup-open').on("click", function () {
        $('.popup, .popup-wrap').show();
    });


    /* Кнопка пройти тест */

    $('.start-test-btn').on("click", function () {
        $('.test-links').toggleClass('shown');
        $(this).toggleClass('open');
    });
    /* Calendar */

    $('.select-birth-date').focus(function () {
        $(this).next().show();
    });
    $('.select-birth-date').focusout(function () {
        $(this).next().hide();
    });
    $('.close-calendar').on("click", function () {
        $('.calendar').hide();
    });


    /* График */

    $('.chart-level[level-data]').on("click", function () {
        var level = $(this).attr('level-data');

        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');

        $(this).addClass('active');
        $('.chart-levels-items .level-info[level-data="' + level + '"]').addClass('active');

        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="' + level + '"]').addClass('shown');

        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="' + level + '"]').addClass('shown');

        if (window.matchMedia('(max-width: 768px)').matches) {
            $([document.documentElement, document.body]).animate({
                scrollTop: $('.chart-levels-items .level-info[level-data="' + level + '"]').offset().top
            }, 2000);
        }
    });



    if (window.matchMedia('(max-width: 768px)').matches) {

        $(".tabs-btn").on("click", function () {

            if ($(this).hasClass('active')) {
                $(this).removeClass('active');
                $(this).parent().removeClass('active');
            } else {
                $(".tabs-btn, .tabs-content").removeClass('active');
                $(this).toggleClass('active');
                $(this).parent().toggleClass('active');
            }
        });

        $(".chart-levels-items .btn-show-details").on("click", function () {
            $(this).siblings('.level-info-text').toggle();
            $(this).toggle();
            $(this).siblings('.btn-recommend').toggle();
        });
        $('#partner1_tab').on("click", function () {
            $('.result-partner-wrap').removeClass('active');
            $('#partner1_result').addClass('active');
        });
        $('#partner2_tab').on("click", function () {
            $('.result-partner-wrap').removeClass('active');
            $('#partner2_result').addClass('active');
        });
    }
    /* Слайдеры */

});
let slideIndex = [1, 1];

let slideId = ["popup_slider", "page_slider"]

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
    showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
    let i;
    let x = document.getElementsByClassName(slideId[no]);
    if (n > x.length) {
        slideIndex[no] = 1
    }
    if (n < 1) {
        slideIndex[no] = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].classList.remove("shown");
    }
    x[slideIndex[no] - 1].classList.add("shown");
}