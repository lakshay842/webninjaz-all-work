var owl = $('.reveiw-carousel');
 owl.owlCarousel({
   margin: 30,
   loop: true,
   nav: false,
   dots: true,
   responsive: {
     0: {
       items: 2
     },
     600: {
       items: 3
     },
     1000: {
       items: 7
     }
   }
})


var owl = $('#owl-carousel1');
 owl.owlCarousel({
   margin: 300,
   loop: true,
   nav: false,
   dots: true,
   responsive: {
     0: {
       items: 1
     },
     600: {
       items: 2
     },
     1000: {
       items: 3,
      
     },
     1450:{
      items: 4,
     }
   }
})


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

// for sidebar
function openNav() {
  document.getElementById("mySidepanel").style.left = "0";
}
/* Set the width of the sidebar to 0 (hide it) */
function closeNav() {
  document.getElementById("mySidepanel").style.left = "100%";
}