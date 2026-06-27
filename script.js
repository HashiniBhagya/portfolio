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

function revealOnScroll() {
    const reveals = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .reveal-rotate');
    
    reveals.forEach(element => {
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const elementVisible = 120;
        
        if (elementTop < windowHeight - elementVisible && elementBottom > 0) {
            element.classList.add('active');
        }else{
            element.classList.remove('active');
        }
    });
    
}window.addEventListener('scroll', revealOnScroll);

function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    counters.forEach(counter => {
        const target = parseInt(counter.getAttribute('data-target'));
        const rect = counter.getBoundingClientRect();
        const windowHeight = window.innerHeight;
   
        const isVisible = rect.top < windowHeight - 50 && rect.bottom > 50;
        
        if (isVisible) {
            
            if (!counter.classList.contains('is-animating') && !counter.classList.contains('animated')) {
                counter.classList.add('is-animating'); 
                let current = 0;
                const increment = target / 40; 
                
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        counter.textContent = target;
                        clearInterval(timer);
                        counter.classList.remove('is-animating');
                        counter.classList.add('animated'); 
                    } else {
                        counter.textContent = Math.floor(current);
                    }
                }, 30);
            }
        } else {
           
            counter.classList.remove('animated');
            counter.classList.remove('is-animating');
            counter.textContent = "0";
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        if (index % 2 === 0) {
            section.classList.add('reveal');
        } else {
            section.classList.add('reveal');
        }
    });
    
    document.querySelectorAll('.edu-card').forEach((card, index) => {
        if (index % 2 === 0) {
            card.classList.add('reveal-left');
        } else {
            card.classList.add('reveal-right');
        }
    });
    
    document.querySelectorAll('.project-card').forEach(card => {
        card.classList.add('reveal-scale');
    });
    
    document.querySelectorAll('.competency-group').forEach((group, index) => {
        group.classList.add('reveal');
        group.style.transitionDelay = (index * 0.1) + 's';
    });
   
    document.querySelectorAll('.skill-category').forEach((category, index) => {
        category.classList.add('reveal');
        category.style.transitionDelay = (index * 0.15) + 's';
    });
 
    document.querySelector('.about-image')?.classList.add('reveal-left');
    document.querySelector('.about-text')?.classList.add('reveal-right');
  
    document.querySelector('.contact-info')?.classList.add('reveal-left');
    document.querySelector('.contact-form')?.classList.add('reveal-right');
  
    document.querySelectorAll('.logo-item').forEach((item, index) => {
        item.classList.add('reveal-scale');
        item.style.transitionDelay = (index * 0.05) + 's';
    });

    setTimeout(() => {
        revealOnScroll();
        animateCounters();
    }, 100);
});

window.addEventListener('scroll', () => {
    revealOnScroll();
    animateCounters();
});

document.querySelectorAll(".logo-item").forEach(item => {
    item.addEventListener("mouseenter", function() {
        this.style.animation = "float-card 0.6s ease";
    });
});

console.log("🚀 Portfolio loaded successfully!");
console.log("👩‍💻 Built with ❤️ by Hashini Bhagya");

window.addEventListener('load', function() {
    if (window.location.hash === '#contact') {
        const form = document.querySelector('.contact-form');
        if (form) {
            const messageDiv = document.createElement('p');
            messageDiv.style.color = '#10b981';
            messageDiv.style.textAlign = 'center';
            messageDiv.style.marginTop = '1rem';
            messageDiv.style.fontWeight = '600';
            messageDiv.style.padding = '0.8rem';
            messageDiv.style.background = 'rgba(16, 185, 129, 0.1)';
            messageDiv.style.borderRadius = '8px';
            messageDiv.style.border = '1px solid #10b981';
            messageDiv.textContent = '✅ Message sent successfully! I\'ll get back to you soon.';
            form.appendChild(messageDiv);
            
            setTimeout(() => {
                if (messageDiv.parentNode) {
                    messageDiv.remove();
                }
            }, 8000);
        }
    }
});