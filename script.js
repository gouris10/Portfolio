//THEME TOGGLE (Light / Dark)
const toggleBtn = document.getElementById("themeToggle");
const body = document.body;

// Load saved theme
if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggleBtn.textContent = "🌙";
}

toggleBtn.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
        localStorage.setItem("theme", "light");
        toggleBtn.textContent = "🌙";
    } else {
        localStorage.setItem("theme", "dark");
        toggleBtn.textContent = "☀️";
    }
});

// TYPING TEXT ANIMATION
const text = "Fullstack Web Developer | Java Developer | Problem Solver";
let index = 0;
const speed = 80;
const typingText = document.getElementById("typing-text");

function typeEffect() {
    if (index < text.length) {
        typingText.textContent += text.charAt(index);
        index++;
        setTimeout(typeEffect, speed);
    }
}
typeEffect();

// SCROLL REVEAL ANIMATION 
const reveals = document.querySelectorAll(".about-section, .info-card");

window.addEventListener("scroll", () => {
    reveals.forEach(section => {
        const top = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            section.classList.add("active");
        }
    });
});

// Add reveal class initially
reveals.forEach(section => section.classList.add("reveal"));
