document.addEventListener("DOMContentLoaded", () => {
  let currentSlide = 0;
  const slides = document.querySelectorAll(".slide");
  const totalSlides = slides.length;

  function showNextSlide() {
    // Hide the current slide
    slides[currentSlide].classList.remove("active");

    // Move to the next slide
    currentSlide = (currentSlide + 1) % totalSlides;

    // Show the new current slide
    slides[currentSlide].classList.add("active");
  }

  // Start the slideshow with the first slide active
  slides[currentSlide].classList.add("active");
  setInterval(showNextSlide, 4000); // Change slide every 3 seconds
});
