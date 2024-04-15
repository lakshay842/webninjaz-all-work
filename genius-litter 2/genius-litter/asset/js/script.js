jQuery(document).ready(function($){

  $('.dropdown-toggle').click(function(){
    $('.dropdown-menu').slideToggle(300); // Adjust the duration as needed
  });  

    $(".menu img").click(function(){
      $('.menubx').addClass('active');  
      $('body').css('overflow',"hidden");
    });
  
    $(".closebx").click(function(){
        $('.menubx').removeClass('active');
        $(".dropmenu").removeClass('active');
        $('body').css('overflow-y',"auto");
    });
  
    $(".dropmenu").click(function(){
        $(".dropmenu").toggleClass('active');
    });


    $(document).ready(function() {
        // On button click, change the image source
        $('.nav-link.dropdown-toggle').click(function() {
            // Change the image source to the new image
            $('.menu-images img').attr('src', './asset/images/menu-img2.png');
        });
    });

    var owl = $('.reveiw-carousel');
    owl.owlCarousel({
      margin: 20,
      loop: true,
      nav: false, 
      dots: false, 
      responsive: {
        0: {
          items: 1.2
        },
        370: {
          items: 1.3
        },
        450: {
          items: 1.4
        },

        600: {
          items: 2.2
        },
        900: {
          items: 3.2
        },
        1220: {
          items: 4.2
        }
      }
  });



var owl2 = $('.customer-carousel');
owl2.owlCarousel({
  margin: 24,
  loop: true,
  nav: true,
  dots: false,
  responsive:{
    0:{
        items:1
    },
    600:{
        items:2
    },
    1000:{
        items:3
    }
}
});





$('.ph-labelimg-div').hover(function() {
  var index = $('.ph-labelimg-div').index(this);
  $('.ph-labelimg-div').removeClass('selected').eq(index).addClass('selected');
  $('.ph-label-content').hide().eq(index).show();
});

// ===========video js
//video
$(".video-play").on('click', function(e) {
  // $(".video-testimonial-content p").hide();
  e.preventDefault(); 
  var vidWrap = $(this).parent(),
      iframe = vidWrap.find('.video iframe'),
      iframeSrc = iframe.attr('src'),
      iframePlay = iframeSrc += "?autoplay=1";
  vidWrap.children('.video-thumbnail').fadeOut();
  vidWrap.children('.video-play').fadeOut();
  vidWrap.find('.video iframe').attr('src', iframePlay);
});

});

