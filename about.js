// Scroll reveal animation
window.addEventListener('scroll', reveal);

function reveal() {
    const sections = document.querySelectorAll('section');
    for (let i = 0; i < sections.length; i++) {
        const windowHeight = window.innerHeight;
        const sectionTop = sections[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            sections[i].classList.add('active');
        } else {
            sections[i].classList.remove('active');
        }
    }
}

// Activate reveal animation on load
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.remove('hidden');
    });
});

// Mobile Navigation Menu Toggle
const menuToggleBtn = document.getElementById('menu-toggle-btn');
const closeMenuBtn = document.getElementById('close-menu-btn');
const navMenu = document.querySelector('.nav_menu');

if (menuToggleBtn && closeMenuBtn && navMenu) {
    menuToggleBtn.addEventListener('click', () => {
        navMenu.classList.add('active');
        menuToggleBtn.style.display = 'none';
        closeMenuBtn.style.display = 'block';
    });

    closeMenuBtn.addEventListener('click', () => {
        navMenu.classList.remove('active');
        menuToggleBtn.style.display = 'block';
        closeMenuBtn.style.display = 'none';
    });

    // Close menu when clicking on a link
    navMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggleBtn.style.display = 'block';
            closeMenuBtn.style.display = 'none';
        });
    });
}

// Activate the reveal animation on scroll
window.addEventListener('scroll', reveal);

function reveal() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const windowHeight = window.innerHeight;
        const sectionTop = section.getBoundingClientRect().top;
        const revealPoint = 150;

        if (sectionTop < windowHeight - revealPoint) {
            section.classList.add('active');
        } else {
            section.classList.remove('active');
        }
    });
}

// Activate reveal animation on page load
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.classList.remove('hidden');
    });
});
