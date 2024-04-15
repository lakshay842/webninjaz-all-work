// ==========tab switch========

$(document).ready(function () {
    $(".tabs-content").eq(0).show();
    $("#clockify-tabs li").eq(0).addClass("active");
    $("#clockify-tabs li").click(function () {
        var number = $(this).index();
        $("#clockify-tabs li").removeClass("active");
        $(".tabs-content").hide().eq(number).fadeIn("slow");
        $("#clockify-tabs li").eq(number).addClass("active");
    });
});

// ===========mobile-header========


$(document).ready(function() {
    $('#open-menu-btn').click(function() {
      $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
      $('#overlay').addClass('active-behind');
      $('body').css('overflow', 'hidden');
    });
  
    $('.x-header-menu-close').click(function() {
      $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
      $('#overlay').removeClass('active-behind');
      $('body').css('overflow', 'unset');
    });
    $('.menu-bar-show-overlay').click(function() {
      $('.x-mobile-header-hide-menu-bg').toggleClass('active-menu');
      $('#overlay').removeClass('active-behind');
      $('body').css('overflow', 'unset');
    })
  
    $('.mobile-search-accordian').click(function() {
      // Close all open split-accordion-text elements
      $('.split-accordion-text').not($(this).next('.split-accordion-text')).slideUp();
  
      // Toggle the visibility of the clicked split-accordion-text
      $(this).next('.split-accordion-text').slideToggle();
    });
  });