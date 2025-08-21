const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Select all nav links
const navLinksAll = document.querySelectorAll('.nav-links a');

// Smooth scroll + fade-in on nav click
navLinksAll.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        // Smooth scroll
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Reset + trigger fade-in
        targetSection.classList.remove('show');
        setTimeout(() => {
            targetSection.classList.add('show');
        }, 600);
    });
});

// ===== Fade-in on scroll fallback =====
function fadeInOnScroll() {
    const triggerBottom = window.innerHeight * 0.85; // trigger when 85% visible
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const boxTop = section.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {
            section.classList.add('show');
        }
    });
}

// Run fade-in when scrolling
window.addEventListener('scroll', fadeInOnScroll);
// Also check on load
window.addEventListener('load', () => {
    document.querySelector('#home').classList.add('show');
    fadeInOnScroll();
});

// ===== Contact form =====
document.getElementById('contactForm').addEventListener('submit', function(e){
    e.preventDefault();
    alert("Message sent successfully");
    this.reset();
});
