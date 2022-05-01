$(function(){
// slider
$('.banner_slider').slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll:1,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1700,
    dots:true,
    speed: 800,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '0px',
          slidesToShow:1
        }
      }
    ]
  });

  // Back to Top 
  var btn = $('.backtotop');

  $(window).scroll(function() {
    if ($(window).scrollTop() > 300) {
      btn.addClass('show');
    } else {
      btn.removeClass('show');
    }
  });
  btn.on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({scrollTop:0}, '300');
  });


  
});