$(document).ready(function () {

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

    /* Табы */

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

    /* Checkbox стили при checked */
   
    $(".form-checkbox-input").change(function () {
        if (this.checked) {
            $(this).parents().addClass('checked');
            //$('select[name="birth-hour"]').attr('disabled','disabled');
            //$('select[name="birth-minute"]').attr('disabled','disabled');
            //$('.birth-time').addClass('disabled');
            //$(this).parent().siblings().addClass('disabled');
        } else {
            $(this).parents().removeClass('checked');
            //$('select[name="birth-hour"]').removeAttr('disabled');
            //$('select[name="birth-minute"]').removeAttr('disabled');
            //$('.birth-time').removeClass('disabled');
            //$(this).parent().siblings().removeClass('disabled');
        }
    });

});

/* Слайдер */

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("chart-slider-item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "block";
}