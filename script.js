document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initTheme();
    initCustomCursor();
    initScrollAnimations();
});

function initPreloader() {
    const loaderCounter = document.getElementById('loaderCounter');
    const loaderStatus = document.getElementById('loaderStatus');
    const preloader = document.getElementById('preloader');
    
    if (!preloader || !loaderCounter) return;
    
    const statuses = ["Designing...", "Engineering...", "Optimizing...", "Executing...", "Finalizing..."];
    let count = 0;
    
    const interval = setInterval(() => {
        count += 1;
        if (count > 100) count = 100;
        
        // Update Counter Text with leading zeros
        const displayVal = count.toString().padStart(3, '0');
        loaderCounter.innerText = displayVal;
        
        // Update Clip Path
        loaderCounter.style.clipPath = `inset(0 ${100 - count}% 0 0)`;
        
        // Update Status Text
        if (loaderStatus && count % 20 === 0) {
            const statusIdx = Math.floor(count / 25);
            if (statuses[statusIdx]) {
                loaderStatus.innerText = statuses[statusIdx];
            }
        }
        
        if (count === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hide');
                // Allow scrolling after preloader is gone
                document.body.style.overflow = 'auto';
            }, 800);
        }
    }, 30);
}

function initTheme() {
    const themeToggle = document.getElementById('themeToggle');
    if (!themeToggle) return;

    // Check for saved theme
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
        themeToggle.innerText = '☀️';
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('light-theme');
        const isLight = document.body.classList.contains('light-theme');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        themeToggle.innerText = isLight ? '☀️' : '🌙';
    });
}

function initCustomCursor() {
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if(!cursor || !follower) return;

    // The visibility is handled by CSS media queries
    // We just check if the element is being displayed before running logic
    if (window.getComputedStyle(cursor).display === 'none') return;
    
    let mouseX = 0, mouseY = 0;
    let followerX = 0, followerY = 0;
    
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
        cursor.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%, -50%)`;
    });
    
    function render() {
        followerX += (mouseX - followerX) * 0.15;
        followerY += (mouseY - followerY) * 0.15;
        follower.style.transform = `translate(${followerX}px, ${followerY}px) translate(-50%, -50%)`;
        requestAnimationFrame(render);
    }
    render();
    
    const hoverElements = document.querySelectorAll('a, button, .card, input, textarea, .pf-card, .cat-box');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });
}

function initScrollAnimations() {
    const fadeElements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    fadeElements.forEach(el => observer.observe(el));

    // FAQ Toggle
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const isActive = item.classList.contains('active');
            faqItems.forEach(i => i.classList.remove('active'));
            if (!isActive) item.classList.add('active');
        });
    });
}

// Global Re-init for Dynamic Cursor (if needed)
function updateCursorTargets() {
    const follower = document.getElementById('cursorFollower');
    if(!follower) return;
    const hoverElements = document.querySelectorAll('a, button, input, textarea, .pf-card, .cat-box, .feature-card, .faq-question, .project-card, .banner-card, .tech-card, .partner-logo');
    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => follower.classList.add('hovering'));
        el.addEventListener('mouseleave', () => follower.classList.remove('hovering'));
    });
}

// Add call to updateCursorTargets in DOMContentLoaded
document.addEventListener('DOMContentLoaded', () => {
    updateCursorTargets();
});
