var owl = $('.reveiw-carousel');
 owl.owlCarousel({
   margin: 20,
   loop: true,
   nav: false,
   dots: false,
//    autoWidth: true,
   responsive: {
  
     600: {
       items: 2,
       autoWidth: true,
       center: true
     },
     1000: {
       items: 3,
       autoWidth: true,
       center: true
     }
   }
})


// ========testimonial=======

var owl = $('.testimonial-carousel');
 owl.owlCarousel({
   margin: 20,
   loop: true,
   nav: false,
   dots: false,
//    autoWidth: true,
   responsive: {
  0:{
    items: 1,
    autoWidth: true,
  },
     600: {
       items: 1,
       autoWidth: true,
       center: true
     },
     1000: {
       items: 2,
       autoWidth: true,
       center: true
     }
   }
})
function prevVideo() {
  owl.trigger('prev.owl.carousel');
}

function nextVideo() {
  owl.trigger('next.owl.carousel');
}



// ========accordion===========



// tab
// Show the first tab and hide the rest
$('#tabs-nav li:first-child').addClass('active');
$('.tab-content').hide();
$('.tab-content:first').show();

// Click function
$('#tabs-nav li').click(function(){
  $('#tabs-nav li').removeClass('active');
  $(this).addClass('active');
  $('.tab-content').hide();
  
  var activeTab = $(this).find('a').attr('href');
  $(activeTab).fadeIn();
  return false;
});





// tab accordion

$(document).ready(function() {
  $('.header__icon--menu').on('click', ()=>{
    $('.menu-drawer').toggleClass('active-menu');
  })
  // load more
  $('#qna-load-more').on('click', ()=>{
    $('#tabs-content').toggleClass('load-more-dt');
    if($('#tabs-content').hasClass('load-more-dt')){
      $('#qna-load-more').html('Show Less');
    }
    else{
    $('#qna-load-more').html('Load More');
    }
  })
  $(".set > a").on("click", function() {
    if ($(this).hasClass("active")) {
      $(this).removeClass("active");
      $(this)
        .siblings(".content")
        .slideUp(200);
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
    } else {
      $(".set > a i")
        .removeClass("fa-minus")
        .addClass("fa-plus");
      $(this)
        .find("i")
        .removeClass("fa-plus")
        .addClass("fa-minus");
      $(".set > a").removeClass("active");
      $(this).addClass("active");
      $(".content").slideUp(200);
      $(this)
        .siblings(".content")
        .slideDown(200);
    }
  });
});





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



// ======GSAP======

// let animate = gsap.timeline();

// animate.from('.x-about',{
//   x:-1600,
//   duration:1,
// })

// animate.from('.x-about-img',{
//   y:-500,
//   x:-500,
//   duration:1,
//   opacity:0,
// })

// animate.from('.x-about-text h2',{
//   x:500,
//   duration:1,
//   opacity:0,
// })


// animate.from('.x-about-text p',{
//   duration:1,
//   opacity:0,
// })

// animate.from('.x-about-text img',{
//   x:-500,
//   duration:1,
//   opacity:0,
// })



// const ninjaL = document.querySelector('.ninja-l');
// const ninjaLImg = document.querySelector('.ninja-l-img');
// let offsetX = 0;
// let offsetY = 0;

// document.addEventListener('mousemove', (event) => {
//     const { clientX, clientY } = event;
//     const { left, top, width, height } = ninjaL.getBoundingClientRect();
//     const maxX = width - ninjaLImg.clientWidth;
//     const maxY = height - ninjaLImg.clientHeight;

//     offsetX = Math.max(0, Math.min(clientX - left, maxX));
//     offsetY = Math.max(0, Math.min(clientY - top, maxY));

//     updatePosition();
// });

// document.addEventListener('mouseleave', () => {
//     offsetX = 0;
//     offsetY = 0;
//     updatePosition();
// });

// function updatePosition() {
//     ninjaLImg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
// }








// =============== worm movement diagonaly========
const ninjaL = document.querySelector('.ninja-l');
const ninjaLImg = document.querySelector('.ninja-l-img');
let offsetX = 0;
let offsetY = 0;

document.addEventListener('mousemove', (event) => {
    const { clientX, clientY } = event;
    const { left, top, width, height } = ninjaL.getBoundingClientRect();
    const maxX = width - ninjaLImg.clientWidth;
    const maxY = height - ninjaLImg.clientHeight;

    offsetX = Math.max(0, Math.min(clientX - left, maxX));
    offsetY = Math.max(0, Math.min(clientY - top, maxY));

    updatePosition();
});

document.addEventListener('mouseleave', () => {
    offsetX = 0;
    offsetY = 0;
    updatePosition();
});

function updatePosition() {
    ninjaLImg.style.transform = `translate(${offsetX}px, ${offsetY}px)`;
}

// =============
let animate = gsap.timeline();

animate.from('.ninja-b-img svg', {
  y: -500,
  duration: 0.4,
});

animate.to('.ninja-b-flower', {
  y: -500,
  duration: 1,
});

animate.to('.ninja-b', {
  y: -500,
  duration: 1,
});