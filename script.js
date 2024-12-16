// hamburger SHOW KE LIYE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
let slideIndex = 1;
showSlides(slideIndex);

// Function to increment or decrement the slide index
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Function to select the current slide
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Function to show the current slide
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  
  // Hide all slides
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // Remove the "active" class from all dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }

  // Show the current slide
  slides[slideIndex-1].style.display = "block";  

  // Add the "active" class to the current dot
  dots[slideIndex-1].className += " active";
}

// Auto slide every 3 seconds
setInterval(function() {
  plusSlides(1);
}, 5000);
