// SCROLL ANIMATION
const foods = document.querySelectorAll(".food");

window.addEventListener("scroll", () => {
    foods.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// CLICK IMAGE FULLSCREEN
const images = document.querySelectorAll(".food img");

images.forEach(img => {
    img.addEventListener("click", () => {
        if (img.requestFullscreen) {
            img.requestFullscreen();
        }
    });
});