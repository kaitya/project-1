$(document).ready(function () {
    
    /* Табы */
        if (window.matchMedia("(max-width: 768px)").matches) {
            
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
        $(this).text(function(i, text){
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
    $('.popup-open').on("click", function () {
        $('.popup, .popup-wrap').show();
    });
    
    
    /* Кнопка пройти тест */
    
     $('.start-test-btn').on("click", function () {
        $('.test-links').toggleClass('shown');
         $(this).toggleClass('open');
    });
    /* Calendar */
    
    $('.select-birth-date').focus(function() {
        $(this).next().show();
    });
    $('.select-birth-date').focusout(function() {
        $(this).next().hide();
    });
    $('.close-calendar').on("click", function () {
        $('.calendar').hide();
    });
    
    
    
    /* График */ 
    $('.chart-level[level-data="l1"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l1"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l1"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l1"]').addClass('shown');
        
        if(window.matchMedia('(@media screen and (max-width: 768px))').matches){
         $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l1']").offset().top
    }, 2000);
        }
        
        
    });
    
    $('.chart-level[level-data="l2"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l2"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l2"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l2"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l2']").offset().top
    }, 2000);
        
    });
    
    $('.chart-level[level-data="l3"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l3"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l3"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l3"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l3']").offset().top
    }, 2000);
    });
    
    $('.chart-level[level-data="l4"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l4"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l4"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l4"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l4']").offset().top
    }, 2000);
    });
    
    $('.chart-level[level-data="l5"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l5"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l5"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l5"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l5']").offset().top
    }, 2000);
    });
    
    $('.chart-level[level-data="l6"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l6"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l6"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l6"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l6']").offset().top
    }, 2000);
    });
    
    $('.chart-level[level-data="l7"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l7"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l7"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l7"]').addClass('shown');
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l7']").offset().top
    }, 2000);
    });
    
    $('.chart-level[level-data="l8"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l8"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l8"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l8"]').addClass('shown');
    });
    
    $('.chart-level[level-data="l9"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l9"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l9"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l9"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l9']").offset().top
    }, 2000);
    });
    
    $('.chart-level[level-data="l10"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l10"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l10"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l10"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l10']").offset().top
    }, 2000);
    });
    
    /* Lvl 11 */
    $('.chart-level[level-data="l11"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l11"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l11"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l11"]').addClass('shown');
        
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l11']").offset().top
    }, 2000);
    });
    
    /* Lvl 12 */
    $('.chart-level[level-data="l12"]').on("click", function () {
        
        $('.chart-level').removeClass('active');
        $('.chart-levels-items .level-info').removeClass('active');
        $(this).addClass('active');
        
        $('.chart-levels-items .level-info[level-data="l12"]').addClass('active'); 
        
        $('.chart-slider-item.page_slider').removeClass('shown');
        $('.chart-slider-item.page_slider[level-data="l12"]').addClass('shown');
        
        $('.chart-slider-item.popup_slider').removeClass('shown');
        $('.chart-slider-item.popup_slider[level-data="l12"]').addClass('shown');
          $([document.documentElement, document.body]).animate({
        scrollTop: $(".chart-levels-items .level-info[level-data='l12']").offset().top
    }, 2000);
    });


if(window.matchMedia('(max-width: 768px)').matches){
        
        
        
        $(".tabs-btn").on("click", function () {
            
            if ($(this).hasClass('active')){
                $(this).removeClass('active');
                $(this).parent().removeClass('active');
            }
            else{
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
let slideIndex = [1,1];

let slideId = ["popup_slider", "page_slider"]

showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  let i;
  let x = document.getElementsByClassName(slideId[no]);
  if (n > x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].classList.remove("shown");  
  }
  x[slideIndex[no]-1].classList.add("shown");  
}
