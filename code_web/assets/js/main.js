$(document).ready(function(){
    $(function () {
        $(document).scroll(function () {
          var $nav = $(".topnav");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
      $(function () {
        $(document).scroll(function () {
          var $nav = $(".scrollbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });
        $('.slick').slick({
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            adaptiveHeight: true,
            autoplay: true,
            autoplaySpeed: 4500,
            cssEase: 'linear',
            arrows: false,
       
        });
  });
  function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }


  