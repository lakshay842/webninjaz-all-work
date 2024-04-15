// validator tab
$(document).ready(function () {
    // 1st tab
    $(".validator-tabs-content").eq(0).show();
    $("#tabs li").eq(0).addClass("active");
    $("#tabs li").click(function () {
        var number = $(this).index();
        $("#tabs li").removeClass("active");
        $(".validator-tabs-content").hide().eq(number).fadeIn("slow");
        $("#tabs li").eq(number).addClass("active");
    });

    // 2nd new tab
    $(".validator-work-tabs-content").eq(0).show();
    $("#work-tabs li").eq(0).addClass("active");
    $("#work-tabs li").click(function () {
        var number = $(this).index();
        $("#work-tabs li").removeClass("active");
        $(".validator-work-tabs-content").hide().eq(number).fadeIn("slow");
        $("#work-tabs li").eq(number).addClass("active");
    });

    // 3rd new tab
    $(".tabs-btn-content").eq(0).show();
    $("#btn-tabs li").eq(0).addClass("active");
    $("#btn-tabs li").click(function () {
        var number = $(this).index();
        $("#btn-tabs li").removeClass("active");
        $(".tabs-btn-content").hide().eq(number).fadeIn("slow");
        $("#btn-tabs li").eq(number).addClass("active");
    });

    //========= multiple checked=======
$('.all-cb-div .form-check-input').on('click',function(){
    console.log('checkbox clicked');
    $(this).parents('.form-check').toggleClass('fc-checked');
})

});



// =======add advanced text=======
function addText() {
    var inputValue = document.getElementById("inputText").value;
    alert("Input Text: " + inputValue);
}

// ============api cross============

function removeParentClass(e) {
    document.querySelector('.api-notice-bar').style.display = "none";
}

// ==============scroll customization===========

const tabs = document.querySelectorAll(".tab")
const scroll_stickys = document.querySelectorAll(".scroll-sticky")
const pages = document.querySelectorAll(".page")
const scrollToTop = document.querySelector(".scrollToTop")

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target);
      const index = Array.from(pages).indexOf(entry.target)

      tabs.forEach(tab => {
        tab.classList.remove("activeTab")
      })
      tabs[index].classList.add("activeTab")

      scroll_stickys.forEach(scroll_sticky => {
        scroll_sticky.classList.remove("active-sl-tab")
      })
      scroll_stickys[index].classList.add("active-sl-tab")

    }
  })
}, {
  threshold: 0.25,
})


pages.forEach(page => {
  observer.observe(page)
})


// ==========customize button=========

function toggleActive(button) {
  // Remove 'active-btn' class from all buttons
  var buttons = document.querySelectorAll('.rounded-btn, .square-btn');
  buttons.forEach(function(btn) {
      btn.classList.remove('active-btnn');
  });

  // Add 'active-btn' class to the clicked button
  button.classList.add('active-btnn');
}





// const tabs = document.querySelectorAll(".tab")
// const pages = document.querySelectorAll(".page")
// const scrollToTop = document.querySelector(".scrollToTop")

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       const index = Array.from(pages).indexOf(entry.target)
//       tabs.forEach(tab => {
//         tab.classList.remove("activeTab")
//       })

//       tabs[index].classList.add("activeTab")
//       if(tabs[index].classList.contains('general-tb')){
//         document.getElementsByClassName('scroll-right-correct')[0].classList.add('active-tb-left');
//         document.getElementsByClassName('scroll-right-prompt-bg')[0].classList.remove('active-tb-left');
//         document.getElementsByClassName('scroll-right-inacc')[0].classList.remove('active-tb-left');
//       }
//       if(tabs[index].classList.contains('sugg-cr-tb')){
//         document.getElementsByClassName('scroll-right-prompt-bg')[0].classList.add('active-tb-left');
//         document.getElementsByClassName('scroll-right-correct')[0].classList.remove('active-tb-left');
//         document.getElementsByClassName('scroll-right-inacc')[0].classList.remove('active-tb-left');

//       }
//       if(tabs[index].classList.contains('un-add-tb')){
//         document.getElementsByClassName('scroll-right-inacc')[0].classList.addClass('active-tb-left');
//         document.getElementsByClassName('scroll-right-prompt-bg')[0].classList.remove('active-tb-left');
//         document.getElementsByClassName('scroll-right-correct')[0].classList.remove('active-tb-left');
//       }
//       console.log(tabs[index].classList);

//     }
//   })
// }, {
//   threshold: 0.25,
// })


// pages.forEach(page => {
//   observer.observe(page)
// })






// const tabs = document.querySelectorAll(".tab")
// const scroll_stickys = document.querySelectorAll(".scroll-sticky")
// const pages = document.querySelectorAll(".page")
// const scrollToTop = document.querySelector(".scrollToTop")

// const observer = new IntersectionObserver((entries, observer) => {
//   entries.forEach(entry => {
//     if (entry.isIntersecting) {
//       console.log(entry.target);
//       const index = Array.from(pages).indexOf(entry.target)

//       tabs.forEach(tab => {
//         tab.classList.remove("activeTab")
//       })
//       tabs[index].classList.add("activeTab")

//       scroll_stickys.forEach(scroll_sticky => {
//         scroll_sticky.classList.remove("active-sl-tab")
//       })
//       scroll_stickys[index].classList.add("active-sl-tab")

//     }
//   })
// }, {
//   threshold: 0.25,
// })


// pages.forEach(page => {
//   observer.observe(page)
// })