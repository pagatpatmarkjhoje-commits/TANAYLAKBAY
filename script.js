// SCROLL ANIMATION
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// EXPLORE BUTTON
function scrollToSection() {
    document.querySelector("#features").scrollIntoView({
        behavior: "smooth"
    });
}

// IMAGE SLIDER
const images = [
    "images/tanay.jpg",
    "images/daraitan.jpg",
    "images/tanay3.jpg",
    "images/treasuremountain.jpg"
];

let index = 0;
const slide = document.getElementById("slide");

setInterval(() => {
    index++;
    if (index >= images.length) index = 0;
    slide.src = images[index];
}, 3000);

// AUTO PAUSE VIDEO
const video = document.querySelector(".bg-video");

document.addEventListener("visibilitychange", () => {
    if (document.hidden) video.pause();
    else video.play();
});
function goToPage() {
    window.location.href = "explore.html";
}

