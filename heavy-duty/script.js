  // start //
  $('.progress_holder:nth-child(1)').addClass('activated_step');

  // Manage next and previous buttons //
  $(".nextStep").click(function(){
    // button is inside fieldset so set current and next vars //
    current_fs = $(this).parents('fieldset');
    next_fs = $(this).parents('fieldset').next();
    // make sure all fields are filled in //
    var empty = current_fs.find("input.required-field").filter(function() {
        return this.value === "";
    });
    if (empty.length) {
        alert('Please fill in all fields.');
    } else {
    //show the next fieldset
    next_fs.fadeIn(150,'linear').addClass('current');
    //hide the current fieldset with style
    current_fs.fadeOut(0,'linear').removeClass('current');
    // change nav class //
    if ($('fieldset.current').attr('id') == 'step1') {
        $('.progress_holder:nth-child(1)').addClass('comp-step');
      }
    if ($('fieldset.current').attr('id') == 'step2') {
      $('.progress_holder:nth-child(2)').addClass('activated_step');
      $('.progress_holder:nth-child(1)').addClass('comp-step');
    }
    if ($('fieldset.current').attr('id') == 'step3') {
      $('.progress_holder:nth-child(3)').addClass('activated_step');
      $('.progress_holder:nth-child(2)').addClass('comp-step');
    }
    if ($('fieldset.current').attr('id') == 'step4') {
      $('.progress_holder:nth-child(4)').addClass('activated_step');
      $('.progress_holder:nth-child(3)').addClass('comp-step');
    }
    if ($('fieldset.current').attr('id') == 'step5') {
      $('.progress_holder:nth-child(5)').addClass('activated_step');
      $('.progress_holder:nth-child(4)').addClass('comp-step');
    }
    }
  });
  $(".prevStep").click(function(e){
    e.preventDefault();
      current_fs = $(this).parents('fieldset');
      previous_fs = $(this).parents('fieldset').prev();
      //show the previous fieldset
      previous_fs.fadeIn(150,'linear');
      //hide the current fieldset with style
      current_fs.fadeOut(0,'linear');

      if ($(previous_fs).attr('id') == 'step1') {
        $('.progress_holder:nth-child(2)').removeClass('activated_step');
        $('.progress_holder:nth-child(1)').removeClass('comp-step');
      }
      if ($(previous_fs).attr('id') == 'step2') {
        $('.progress_holder:nth-child(3)').removeClass('activated_step');
        $('.progress_holder:nth-child(2)').removeClass('comp-step');
      }
      if ($(previous_fs).attr('id') == 'step3') {
        $('.progress_holder:nth-child(4)').removeClass('activated_step');
        $('.progress_holder:nth-child(3)').removeClass('comp-step');
      }
      if ($(previous_fs).attr('id') == 'step4') {
        $('.progress_holder:nth-child(5)').removeClass('activated_step');
        $('.progress_holder:nth-child(4)').removeClass('comp-step');
      }
      if ($(previous_fs).attr('id') == 'step5') {
        $('.progress_holder:nth-child(5)').removeClass('comp-step');
      }
  });


// toggle step 1

function toggleActive(buttonNumber) {
    for (let i = 1; i <= 3; i++) {
      const professionalElement = document.getElementById(`professional${i}`);
      const buttonElement = document.querySelector(`.hds-professional-button[data-button="${i}"]`);

      if (i === buttonNumber) {
        professionalElement.classList.add('active');
      } else {
        professionalElement.classList.remove('active');
      }
    }
  }

//   slelect specification step 4

// function highlightItem(event) {
//     const listItem = event.target;
//     if (listItem.tagName === 'LI') {
//         listItem.classList.toggle('selected');
//     }
//   }

function highlightItem(event) {
    const listItem = event.target;
    if (listItem.tagName === 'LI') {
      listItem.classList.toggle('selected');
      updateSelectedServices();
    }
  }

  function updateSelectedServices() {
    const selectedServicesDiv = document.getElementById('selectedServices');
    selectedServicesDiv.innerHTML = '';

    const selectedItems = document.querySelectorAll('.services-list li.selected');
    selectedItems.forEach(item => {
      const serviceName = item.textContent.trim();
      const serviceId = item.dataset.service;

      const span = document.createElement('span');
      span.textContent = serviceName;
      span.innerHTML += `<button onclick="removeSelectedService('${serviceId}')">&times;</button>`;

      selectedServicesDiv.appendChild(span);
    });
  }

  function removeSelectedService(serviceId) {
    const listItem = document.querySelector(`.services-list li[data-service="${serviceId}"]`);
    if (listItem) {
      listItem.classList.remove('selected');
      updateSelectedServices();
    }
  }

  function loadMoreItems() {
    const servicesList = document.querySelector('.services-list');
    servicesList.classList.toggle('expanded'); // Toggle the 'expanded' class
  }



  // =============image choosen==========

  jQuery(document).ready(function () {
    ImgUpload();
  });
  
  function ImgUpload() {
    var imgWrap = "";
    var imgArray = [];
  
    $('.upload__inputfile').each(function () {
      $(this).on('change', function (e) {
        imgWrap = $(this).closest('.upload__box').find('.upload__img-wrap');
        var maxLength = $(this).attr('data-max_length');
  
        var files = e.target.files;
        var filesArr = Array.prototype.slice.call(files);
        var iterator = 0;
        filesArr.forEach(function (f, index) {
  
          if (!f.type.match('image.*')) {
            return;
          }
  
          if (imgArray.length > maxLength) {
            return false
          } else {
            var len = 0;
            for (var i = 0; i < imgArray.length; i++) {
              if (imgArray[i] !== undefined) {
                len++;
              }
            }
            if (len > maxLength) {
              return false;
            } else {
              imgArray.push(f);
  
              var reader = new FileReader();
              reader.onload = function (e) { 
                var html = "<div class='upload__img-box'><div style='background-image: url(" + e.target.result + ")' data-number='" + $(".upload__img-close").length + "' data-file='" + f.name + "' class='img-bg'><div class='upload__img-close'></div></div></div>";
                imgWrap.append(html);
                iterator++;
              }
              reader.readAsDataURL(f);
            }
          }
        });
      });
    });
  
    $('body').on('click', ".upload__img-close", function (e) {
      var file = $(this).parent().data("file");
      for (var i = 0; i < imgArray.length; i++) {
        if (imgArray[i].name === file) {
          imgArray.splice(i, 1);
          break;
        }
      }
      $(this).parent().parent().remove();
    });
  }

  // =======upload video======



  
  