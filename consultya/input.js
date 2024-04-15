 //video
$(".play-icon").on('click', function (e) {
    // $(".video-testimonial-content p").hide();
    e.preventDefault();
    var vidWrap = $(this).parent(),
        iframe = vidWrap.find('.video iframe'),
        iframeSrc = iframe.attr('src'),
        iframePlay = iframeSrc += "?autoplay=1";
    vidWrap.children('.iframe-thumbnail').fadeOut();
    vidWrap.children('.play-icon').fadeOut();
    vidWrap.children('.iframe-content').fadeOut();
    vidWrap.find('.video iframe').attr('src', iframePlay);
});


 //video
 $(".play-icon1").on('click', function (e) {
  // $(".video-testimonial-content p").hide();
  e.preventDefault();
  var vidWrap = $(this).parent(),
      iframe = vidWrap.find('.video1 iframe'),
      iframeSrc = iframe.attr('src'),
      iframePlay = iframeSrc += "?autoplay=1";
  vidWrap.children('.iframe-thumbnail1').fadeOut();
  vidWrap.children('.play-icon1').fadeOut();
  vidWrap.children('.iframe-content1').fadeOut();
  vidWrap.find('.video1 iframe').attr('src', iframePlay);
});

//crousal
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
       items: 5
     }
   }
})




var owl = $('.reveiw-carousel1');
 owl.owlCarousel({
   margin: 300,
   loop: true,
   nav: true,
   dots: false,
   responsive: {
     0: {
       items: 1
     },
     600: {
       items: 2
     },
     1000: {
       items: 3,
      
     }
   }
})