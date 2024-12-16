// hamburger SHOW KE LIYE
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});


const slides = document.getElementById('slides');
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  let currentIndex = 0;
  const totalSlides = document.querySelectorAll('.slide').length;

  function showSlide(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    showSlide(currentIndex);
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    showSlide(currentIndex);
  }

  nextButton.addEventListener('click', nextSlide);
  prevButton.addEventListener('click', prevSlide);

  // Auto-slide functionality
  setInterval(nextSlide, 3000);