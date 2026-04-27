let index = 0;
const slides = document.querySelectorAll(".slides img");

function showSlide() {
    slides.forEach(slide => slide.classList.remove("active"));
    slides[index].classList.add("active");

    index++;
    if (index >= slides.length) {
        index = 0;
    }
}

// Cambia cada 3 segundos
setInterval(showSlide, 3000);
