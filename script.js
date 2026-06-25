const words = ["Undergraduate Student", "ICT Student", "Problem Solver", "Tech Enthusiast"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typedElement = document.getElementById("typed");

function typeEffect() {
    const currentWord = words[wordIndex];
    
    if (isDeleting) {
        typedElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typedElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeEffect, 2000);
        return;
    }
    
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
    }
    
    const speed = isDeleting ? 40 : 80;
    setTimeout(typeEffect, speed);
}

typeEffect();

const themeToggle = document.getElementById("themeToggle");
const root = document.documentElement;
const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);
updateThemeIcon(savedTheme);

themeToggle.addEventListener("click", () => {
    const currentTheme = root.getAttribute("data-theme");
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    const icon = themeToggle.querySelector("i");
    icon.className = theme === "dark" ? "fas fa-moon" : "fas fa-sun";
}

const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav-links a").forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));
        if (target) {
            target.scrollIntoView({ behavior: "smooth", block: "start" });
        }
    });
});

window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll(".section");
    const navLinks = document.querySelectorAll(".nav-links a");
    
    let current = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop - 200) {
            current = section.getAttribute("id");
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
    revealOnScroll();
    animateCounters();
});

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    formMessage.textContent = "✨ Message sent! I'll get back to you soon.";
    formMessage.style.color = "#10b981";
    contactForm.reset();
    setTimeout(() => {
        formMessage.textContent = "";
    }, 3000);
});

function createParticles() {
    const container = document.querySelector(".particles-container");
    for (let i = 0; i < 50; i++) {
        const particle = document.createElement("div");
        particle.className = "particle";
        particle.style.position = "absolute";
        particle.style.width = (2 + Math.random() * 3) + "px";
        particle.style.height = particle.style.width;
        particle.style.background = `radial-gradient(circle, #6366f1, #8b5cf6)`;
        particle.style.borderRadius = "50%";
        particle.style.left = Math.random() * 100 + "%";
        particle.style.top = Math.random() * 100 + "%";
        particle.style.opacity = Math.random() * 0.4;
        particle.style.animation = `floatParticle ${10 + Math.random() * 15}s linear infinite`;
        particle.style.animationDelay = Math.random() * 5 + "s";
        container.appendChild(particle);
    }
}

const styleParticles = document.createElement("style");
styleParticles.textContent = `
    @keyframes floatParticle {
        0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
        10% { opacity: 0.5; }
        90% { opacity: 0.5; }
        100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px) rotate(720deg); opacity: 0; }
    }
    .particle {
        pointer-events: none;
    }
`;
document.head.appendChild(styleParticles);

createParticles();