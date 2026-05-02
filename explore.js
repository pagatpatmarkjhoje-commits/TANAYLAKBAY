const videos = document.querySelectorAll(".vid");

// AUTO PAUSE OTHER VIDEOS
videos.forEach(video => {
    video.addEventListener("play", () => {
        videos.forEach(v => {
            if (v !== video) v.pause();
        });
    });

    // FULLSCREEN ON CLICK
    video.addEventListener("click", () => {
        if (video.requestFullscreen) {
            video.requestFullscreen();
        }
    });
});
// SCROLL ANIMATION
const reveals = document.querySelectorAll(".food");

window.addEventListener("scroll", () => {
    reveals.forEach(el => {
        const top = el.getBoundingClientRect().top;

        if (top < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});