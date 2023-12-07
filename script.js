document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelector(".slides");
    const slideWidth = document.querySelector(".slide").clientWidth;
    let slideIndex = 0;

    function nextSlide() {
        slideIndex++;
        if (slideIndex === slides.children.length) {
            slideIndex = 0;
        }
        slideTransition();
    }

    function slideTransition() {
        slides.style.transform = `translateX(-${slideWidth * slideIndex}px)`;
    }

    setInterval(nextSlide, 1000); // Change slide every 3 seconds (adjust as needed)
});