 $(document).ready(function () {
     $(".show-popup1").click(function () {
         $("#popup1").show();
     });
     $(".show-popup2").click(function () {
         $("#popup2").show();
     });
     $(".show-popup3").click(function () {
         $("#popup3").show();
     });
     $(".popup-close").click(function () {
         $(".pop-up").hide();
     });
     $('.tablinks-toggle').click(function () {
         $(this).toggleClass('active');
         $('.tablink').toggleClass('shown');
     });
     $('.tablink').click(function () {
         $('.tablink').toggleClass('shown');
     });
     $(".time-toggle").click(function () {
      if ($(this).hasClass("active")) {
        $(".time-toggle").removeClass("active");
      }
      else {
        $(".time-toggle").removeClass("active");
        $(this).addClass("active");
      }
    });
 });

 function openTab(evt, tabName) {
     var i, tabcontent, tablink;
     tabcontent = document.getElementsByClassName("tabcontent");
     for (i = 0; i < tabcontent.length; i++) {
         tabcontent[i].style.display = "none";
     }
     tablinks = document.getElementsByClassName("tablink");
     for (i = 0; i < tablinks.length; i++) {
         tablinks[i].className = tablinks[i].className.replace(" active", "");
     }
     document.getElementById(tabName).style.display = "block";
     evt.currentTarget.className += " active";
 }

 document.getElementById("defaultOpen").click();


 const mediaQuery = window.matchMedia('(max-width: 1024px)')

 if (mediaQuery.matches) {

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
         let slides = document.getElementsByClassName("mySlides");
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

 }