// ==========tab switch========

// $(document).ready(function () {
//     $(".tabs-content").eq(0).show();
//     $("#clockify-tabs li").eq(0).addClass("active");
//     $("#clockify-tabs li").click(function () {
//         var number = $(this).index();
//         $("#clockify-tabs li").removeClass("active");
//         $(".tabs-content").hide().eq(number).fadeIn("slow");
//         $("#clockify-tabs li").eq(number).addClass("active");
//     });
// });


// ============header dropdown===========

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
  
  // ========input select dot======


function updateStatusImage(containerId) {
  var container = document.getElementById(containerId);
  var checkboxes = container.querySelectorAll('input[name="statusCheckbox"]');
  var statusImage = container.querySelector('.status-image');

  var anyCheckboxChecked = Array.from(checkboxes).some(function (cb) {
      return cb.checked;
  });

  statusImage.style.display = anyCheckboxChecked ? 'inline-block' : 'none';
}

  // ==========toggle bill data==========

//   document.getElementById('toggleElement').addEventListener('click', function() {
//     var billableDiv = document.querySelector('.clockify-pm-billable');
//     var nonBillableDiv = document.querySelector('.clockify-pm-non-billable');

//     if (billableDiv.style.display === 'block') {
//         billableDiv.style.display = 'none';
//         nonBillableDiv.style.display = 'block';
//     } else {
//         billableDiv.style.display = 'block';
//         nonBillableDiv.style.display = 'none';
//     }
// });

// ======search width=====

var searchContainer = document.querySelector('.cpl-search');
var searchInput = document.querySelector('.cpl-search input');
var searchIcon = document.querySelector('.cpl-search svg');

function handleSearchClick() {
    searchContainer.style.width = '300px'; // Expand the width
    searchContainer.style.backgroundColor = 'white';
    searchInput.focus(); // Focus on the input
}

searchIcon.addEventListener('click', handleSearchClick);

searchInput.addEventListener('click', handleSearchClick);

searchInput.addEventListener('blur', function() {
    searchContainer.style.width = '42px'; // Collapse the width
    searchContainer.style.backgroundColor = 'transparent';
});

// ===========description show and hide===========

// function toggleDescription() {
//   var descContent = document.querySelector('.cpd-show-desc-content');
//   descContent.style.display = (descContent.style.display === 'none' || descContent.style.display === '') ? 'block' : 'none';
// }

function toggleDescription() {
  var descContent = document.querySelector('.cpd-show-desc-content');
  var descriptionButton = document.querySelector('.show-description');
  // var svgIcon = document.getElementById('customSVG');

  if (descContent.style.display === 'none' || descContent.style.display === '') {
      descContent.style.display = 'block';
      setTimeout(function () {
          descContent.style.opacity = '1';
      }, 10);
      descriptionButton.style.backgroundColor = '#2F64C9';
      descriptionButton.style.color = 'white';
      // svgIcon.style.stroke = '#2F64C9';
  } else {
      descContent.style.opacity = '0';
      setTimeout(function () {
          descContent.style.display = 'none';
      }, 300);
      descriptionButton.style.backgroundColor = 'transparent';
      descriptionButton.style.color = '#2F64C9';
      // svgIcon.style.stroke = 'red';
  }
}


// ==============overlay popup============

function toggleAddUserPopup() {
  var overlay = document.getElementById('addUserOverlay');
  var addUserForm = document.getElementById('addUserForm');

  if (overlay.style.display === 'block') {
      overlay.style.display = 'none';
      addUserForm.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling on the body
  } else {
      overlay.style.display = 'block';
      addUserForm.style.display = 'block';
      document.body.style.overflow = 'hidden'; // Disable scrolling on the body
  }
}

function closeAddUserPopup(event) {
  var overlay = document.getElementById('addUserOverlay');
  var addUserForm = document.getElementById('addUserForm');

  // Check if the click target is the overlay or cancel button
  if (event.target === overlay || event.target.classList.contains('user-cancel-btn')) {
      overlay.style.display = 'none';
      addUserForm.style.display = 'none';
      document.body.style.overflow = 'auto'; // Enable scrolling on the body
  }
}


// =================project-tracker==============

var currentDropdown = null;

function toggleDropdown(dropdownId) {
  if (currentDropdown !== null) {
    var previousDropdown = document.getElementById(currentDropdown);
    if (previousDropdown.style.display === "block") {
      previousDropdown.style.display = "none";
    }
  }

  var dropdown = document.getElementById(dropdownId);
  dropdown.style.display = (dropdown.style.display === "block") ? "none" : "block";

  currentDropdown = (dropdown.style.display === "block") ? dropdownId : null;
}

function handleDropdownClick(event) {
  // Prevent closing the dropdown when clicking inside the dropdown content
  event.stopPropagation();
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.cpdot-btn, .cpdot-btn svg, .dropdown-content-pdot, .dropdown-content-pdot *')) {
    var dropdowns = document.getElementsByClassName("dropdown-content-pdot");
    for (var i = 0; i < dropdowns.length; i++) {
      var dropdown = dropdowns[i];
      if (dropdown.style.display === "block") {
        dropdown.style.display = "none";
        currentDropdown = null;
      }
    }
  }
}