document.querySelectorAll('.slideshow-container').forEach((container) => {
  const slides = container.querySelectorAll('.slide');
  let slideIndex = 0;

        function showSlides() {
          slides.forEach((slide) =>
           slide.classList.remove('active'));
          slideIndex = (slideIndex + 1) % slides.length;
          slides[slideIndex].classList.add('active');
        }

        // Initial display
        slides[slideIndex].classList.add('active');

        // Change slide every 3 seconds
        setInterval(showSlides, 3000);
        });
