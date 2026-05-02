const profiles = document.querySelectorAll(".profile");
const popup = document.getElementById("popup");
const nameEl = document.getElementById("popup-name");
const infoEl = document.getElementById("popup-info");
const closeBtn = document.getElementById("close");

// OPEN POPUP
profiles.forEach(profile => {
    profile.addEventListener("click", () => {
        nameEl.textContent = profile.dataset.name;
        infoEl.textContent = profile.dataset.info;
        popup.style.display = "flex";
    });
});

// CLOSE BUTTON
closeBtn.addEventListener("click", () => {
    popup.style.display = "none";
});

// CLICK OUTSIDE CLOSE
popup.addEventListener("click", (e) => {
    if (e.target === popup) {
        popup.style.display = "none";
    }
});