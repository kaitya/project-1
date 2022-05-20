$(document).ready(function () {

    /* Переключение пола (муж/жен) */

    $(".gender-toggle").each(function () {
        $(this).click(function () {
            $(this).toggleClass("active");
            $(this).siblings().toggleClass("active");
            $(this).parents().toggleClass("purple pink");
        });
    });

    $('#show-main-description').on("click", function () {
        $('#main-description').toggle('slow');
        $(this).text(function(i, text){
          return text === "Читать подробнее" ? "Скрыть" : "Читать подробнее";
      })
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

    /* Checkbox */
    
    $(function () {
        $(".form-checkbox-input").change(function () {
            if ($(this).prop('checked') == true) {
                
                $(this).parents().find('.select-birth-time').attr('disabled','disabled');
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
});

/* Слайдер страницы */

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
    let slides = document.getElementsByClassName("slider-page");

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

/* Слайдер popup 

let slideIndex = 1;
    displaySlides(slideIndex);

function changeSlides(n) {
    displaySlides(slideIndex += n);
}

function thisSlide(n) {
    displaySlides(slideIndex = n);
}

function displaySlides(n) {
    let i;
    let slides = document.getElementsByClassName("slider-popup");

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
}*/