// =======product detail page owl crousel==========
$(document).ready(function(){
  $(".vision-carousel").owlCarousel({
      loop: true,
      margin: 20,
      nav: false,
      dots: true,
      responsive:{
          0:{
              items: 1
          },
          600:{
              items: 2
          },
          1000:{
              items: 3
          }
      }
  });

  // dog crousel
  $(".vision-dog-carousel").owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    dots: true,
    responsive:{
        0:{
            items: 2
        },
        600:{
            items: 3
        },
        1000:{
            items: 4
        }
    }
});
});



// ================email up on signup near footer============

$(document).ready(function () {
  $(".touch-form-rn input").on("focus", function () {
      $(this).siblings("label").find("span").addClass("move-up");
  });

  $(".touch-form-rn input").on("blur", function () {
      if (!$(this).val()) {
          $(this).siblings("label").find("span").removeClass("move-up");
      }
  });

  $(".touch-form-rn label span").on("click", function () {
      $(this).closest(".touch-form-rn").find("input").focus();
  });
});
// ==========search============



jQuery('.searchIcon').on('click', function (event) {
  // Prevent the click from immediately closing the form
  event.stopPropagation();

  // Toggle the display of the search form
  const searchForm = document.querySelector('.search-form__wrapper');
  searchForm.classList.toggle('show');

  // Add or remove a class to the body to prevent scrolling
  document.body.classList.toggle('no-scroll', searchForm.classList.contains('show'));
});


document.querySelector('.modal__close-button').addEventListener('click', function (event) {
  // Prevent the click from immediately closing the form
  event.stopPropagation();

  // Hide the search form
  const searchForm = document.querySelector('.search-form__wrapper');
  searchForm.classList.remove('show');

  // Remove the class to allow scrolling
  document.body.classList.remove('no-scroll');
});

// Add a click event listener to the entire document
document.addEventListener('click', function (event) {
  // Check if the click target is not inside the search form
  const searchForm = document.querySelector('.search-form__wrapper');
  if (!event.target.closest('.search-form__wrapper')) {
    // Hide the search form
    searchForm.classList.remove('show');

    // Remove the class to allow scrolling
    document.body.classList.remove('no-scroll');
  }
});


// =============cart ===============
// JavaScript using jQuery
$(document).ready(function() {
  $('.vph-cart').on('click', function() {
      // Show the overlay and drawer
      $('.vph-cart-hidden-bg').fadeIn();
      $('.vph-cart-hidden').css('right', '0');

      // Add the 'no-scroll' class to the body
      $('body').addClass('no-scroll-cart');
  });

  // Close when clicking on close button or overlay
  $('.vphdh-closebtn, .vph-cart-hidden-bg').on('click', function() {
      // Hide the overlay and drawer
      $('.vph-cart-hidden-bg').fadeOut();
      $('.vph-cart-hidden').css('right', '-100%');

      // Remove the 'no-scroll' class from the body
      $('body').removeClass('no-scroll-cart');
  });

  // Close when clicking on the drawer itself
  $('.vph-cart-hidden').on('click', function(e) {
      e.stopPropagation(); // Prevent the click from propagating to the document
  });
});


// ===mobile search======
jQuery(document).ready(function ($) {
  // Click event on custom-search icon
  $('.custom-search-icon').on('click', function (event) {
    // Prevent the click from immediately closing the form
    event.stopPropagation();

    // Show the search form
    $('.custom-search-form-wrapper').css('display', 'block');

    // Add or remove a class to the body to prevent scrolling
    $('body').addClass('no-scroll');
  });

  // Click event on modal__close-buttonmb
  $('.modal__close-buttonmb').on('click', function (event) {
    // Prevent the click from bubbling up to the document body
    event.stopPropagation();

    // Hide the search form
    $('.custom-search-form-wrapper').css('display', 'none');

    // Remove the class from the body to allow scrolling
    $('body').removeClass('no-scroll');
  });

  // Close the search form if clicked anywhere outside of it
  $(document).on('click', function (event) {
    // Check if the clicked element is not the search button or the input field
    if (!$(event.target).closest('.search__button').length && !$(event.target).closest('.search__input').length) {
      // Hide the search form
      $('.custom-search-form-wrapper').css('display', 'none');

      // Remove the class from the body to allow scrolling
      $('body').removeClass('no-scroll');
    }
  });
});


// ============crousal=============

$('.slider-single').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  dots: true,
  customPaging: function (slider, i) {
    var title = $(slider.$slides[i]).find('[data-title]').data('title');
    return '<a class=“activity-menu-item”>' + title + '</a>';
  },
});
$('.slider-single').on('init', function (event, slick) {
  var middleSlide = Math.floor(slick.slideCount / 2);
  $('.slider-single').slick('slickGoTo', middleSlide);
});
$('.slider-nav').on('init', function (event, slick) {
  $('.slider-nav .slick-slide.slick-current').addClass('is-active');
}).slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  focusOnSelect: false,
  infinite: false,
  fade: false,
  adaptiveHeight: true,
  infinite: true,
  useTransform: true,
  speed: 400,
  cssEase: 'cubic-bezier(0.77, 0, 0.18, 1)',
  centerMode: true,  // Add this line
  centerPadding: '0', // Add this line
});
$('.slider-single').on('afterChange', function (event, slick, currentSlide) {
  $('.slider-nav').slick('slickGoTo', currentSlide);
  var currrentNavSlideElem = '.slider-nav .slick-slide[data-slick-index=“' + currentSlide + '“]';
  $('.slider-nav .slick-slide.is-active').removeClass('is-active');
  $(currrentNavSlideElem).addClass('is-active');
});
$('.slider-nav').on('click', '.slick-slide', function (event) {
  event.preventDefault();
  var goToSingleSlide = $(this).data('slick-index');
  $('.slider-single').slick('slickGoTo', goToSingleSlide);
});

// ===============mobile header open close==========


function openMobileVision() {
  var visionUnderHeader = document.querySelector('.vision-under-header-mobile');
  visionUnderHeader.style.right = '0';
  // Add a class to the body to prevent scrolling
  document.body.classList.add('no-scroll-mb');
}

function closeMobileVision() {
  var visionUnderHeader = document.querySelector('.vision-under-header-mobile');
  visionUnderHeader.style.right = '100%';
  // Remove the class to allow scrolling
  document.body.classList.remove('no-scroll-mb');
}

function toggleMobileVision() {
  var visionUnderHeader = document.querySelector('.vision-under-header-mobile');
  var isOpen = visionUnderHeader.style.right === '0';

  if (isOpen) {
    closeMobileVision();
  } else {
    openMobileVision();
  }
}


// ===============mobile header in between close==========


$(document).ready(function () {
  // Toggle mobile links
  $(".toggle-mobile-links").click(function () {
    var target = $(this).data("target");
    $(".vhm-shop-mobile").hide(); // Hide all mobile contents
    $(".vhm-shop-mobile[data-content='" + target + "']").show(); // Show the specific mobile content
    $(".vhm-shop-mobile").css("right", "0"); // Show the mobile content panel
  });

  // Close mobile links on close button click
  $(".vhm-sm-close-btn").click(function (event) {
    event.stopPropagation(); // Prevent the event from reaching the parent div
    $(this).closest(".vhm-shop-mobile").css("right", "-100%");
  });

  $(".vhm-sm-close-btn, .vuhm-clbtn").click(function (event) {
    event.stopPropagation(); // Prevent the event from reaching the parent div
    $(".vhm-shop-mobile").css({ right: "-100%" }); // Slide out the mobile content
  });
});





// =======================vision-product-detail-crousel===================

$(document).ready(function(){
	 
  //carousel-control
  
  // $("#myCarousel").mouseover(function(){
  //   $("#myCarousel .carousel-control").show();
  // });

  // $("#myCarousel").mouseleave(function(){
  //   $("#myCarousel .carousel-control").hide();
  // });
  
  //active thumbnail
  
  // $("#thumbCarousel .thumb").on("click", function(){
  //   $(this).addClass("active");
  //   $(this).siblings().removeClass("active");
  
  // });
  
  //carousel slides
  
  $('#myCarousel').on('slid.bs.carousel', function(){
     var index = $('.carousel-inner .item.active').index();
     //console.log(index);
     var thumbnailActive = $('#thumbCarousel .thumb[data-slide-to="'+index+'"]');
     thumbnailActive.addClass('active');
     $(thumbnailActive).siblings().removeClass("active");
    //  console.log($(thumbnailActive).siblings()); 
  });
 });

//  ====================product detail cart=================
  // JavaScript functions for incrementing, decrementing, and adding to cart
  let quantity = 1; // Initial quantity

  function incrementQuantity() {
      quantity++;
      updateQuantity();
      updateButtonStyle();
  }

  function decrementQuantity() {
      if (quantity > 1) {
          quantity--;
          updateQuantity();
      }
      updateButtonStyle();
  }

  function updateQuantity() {
      document.getElementById('quantity').textContent = quantity;
  }

  function updateButtonStyle() {
      const decrementBtn = document.getElementById('decrementBtn');
      decrementBtn.classList.toggle('red', quantity === 1);
  }






// break==================



// ======== GSAP  animation =============
let visionpetseen = gsap.timeline();

visionpetseen.from('.vision-pet-seen', {
  opacity: 0,
  duration: 2,
});


let animate = gsap.timeline();

animate.from('.vision-pet-seen-img img', {
  y: 20,
  opacity: 0,
  stagger: {
    each: 0.2,
  }
});


// let visionbestsellercontent = gsap.timeline();

// visionbestsellercontent.from('.vision-bestseller-content', {

//   opacity: 0,
//   stagger: {
//     each: 0.2,
//   }
// });


gsap.registerPlugin(ScrollTrigger);

// 1
let visionbestsellercontent = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision-bestseller-content",

    once: true, // Adjust the scrub value as needed
  },
});

visionbestsellercontent.from('.vision-bestseller-content', {
  opacity: 0,
  stagger: {
    each: 0.2,
  }
 
});

let vbcanimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".vbc-animation",

    once: true, // Adjust the scrub value as needed
  },
});

vbcanimation.from('.vbc-animation', {
  opacity: 0,
  stagger: {
    each: 0.2,
  }
 
});

// 2
let vpcicontent = gsap.timeline({
  scrollTrigger: {
    trigger: ".vpci-content",

    once: true, // Adjust the scrub value as needed
  },
});

vpcicontent.from('.vpci-content', {
  opacity: 0,
  stagger: {
    each: 0.2,
  }
 
});

// 3
let vpptext = gsap.timeline({
  scrollTrigger: {
    trigger: ".vpp-text",
    
    once: true, // Adjust the scrub value as needed
  },
});

vpptext.from('.vpp-text', {
    y:50,
  opacity: 0,
  duration:1,
});

// 4
let vpsshipping = gsap.timeline({
  scrollTrigger: {
    trigger: ".vps-shipping",

    once: true, // Adjust the scrub value as needed
  },
});

vpsshipping.from('.vps-shipping', {
  opacity: 0,
  stagger: {
    each: 0.2,
  }
 
});

// 5
let visionpawbgimg = gsap.timeline({
  scrollTrigger: {
    trigger: ".vision-paw-bg-img",

    once: true, // Adjust the scrub value as needed
  },
});

visionpawbgimg.from('.vision-paw-bg-img', {
  scale:0.9,
  opacity: 0,
  stagger: {
    each: 0.1,
  }
 
});

// ========================listing page dropdown=================
document.addEventListener("click", function (event) {
  const dropdowns = document.querySelectorAll(".status-dropdown");
  
  dropdowns.forEach(function (dropdown) {
    // const dropdownContent = dropdown.querySelector(".dropdown-content");

    if (event.target.closest(".status-dropdown") === dropdown) {
      // Click inside the same dropdown, toggle its active state
      dropdown.classList.toggle("active");
    } else {
      // Click outside the dropdown, close it
      dropdown.classList.remove("active");
    }
  });
});


// =========listing mobile dropdown==============
document.getElementById('openSidebarBtn').addEventListener('click', function () {
  document.body.classList.add('no-scroll-list-dropdown');
  document.getElementById('sidebar').classList.add('open');
});

document.getElementById('closeSidebarBtn').addEventListener('click', function () {
  document.body.classList.remove('no-scroll-list-dropdown');
  document.getElementById('sidebar').classList.remove('open');
});










