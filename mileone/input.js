 // const searchIcon = document.querySelector(".search-icon-img");
// const searchForm = document.querySelector(".search-form");

// searchIcon.addEventListener("click", () => {
//   searchForm.classList.toggle("active");
// });

const searchIcon = document.querySelector(".search-icon-img");
const searchForm = document.querySelector(".search-form");

// Event listener for the search icon button
searchIcon.addEventListener("click", () => {
  searchForm.classList.toggle("active");
});

// Event listener to close the search bar when clicking outside the search form
document.addEventListener("click", (event) => {
  const isClickInsideSearchForm = searchForm.contains(event.target);
  const isClickInsideSearchIcon = searchIcon.contains(event.target);

  if (!isClickInsideSearchForm && !isClickInsideSearchIcon) {
    searchForm.classList.remove("active");
  }
});



// video


function playVideo() {
  var playButtonOverlay = document.querySelector('.play-button-overlay');
  var thumbnailImage = document.querySelector('.iframe-thumbnail');
  var videoIframe = document.getElementById('youtube-video');
  
  playButtonOverlay.style.display = 'none';
  thumbnailImage.style.display = 'none';
  videoIframe.src += '?autoplay=1';
}


function setActivePage(element) {
  // Remove 'active' class from all links
  const links = document.querySelectorAll('.ft1 ul li a');
  links.forEach((link) => link.classList.remove('active'));

  // Add 'active' class to clicked link
  element.classList.add('active');
}

