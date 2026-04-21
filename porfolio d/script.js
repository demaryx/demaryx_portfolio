document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initCustomCursor();
    initScrollAnimations();
});

function initPreloader() {
    const loaderCounter = document.getElementById('loaderCounter');
    const preloader = document.getElementById('preloader');
    
    if (!preloader || !loaderCounter) return;
    
    let count = 0;
    // 0 to 100 counter simulation
    const interval = setInterval(() => {
        count += 5; // Fast progression
        if (count > 100) count = 100;
        loaderCounter.innerText = `${count}%`;
        
        if (count === 100) {
            clearInterval(interval);
            setTimeout(() => {
                preloader.classList.add('hide');
            }, 300);
        }
    }, 40); // 40ms * 20 steps = ~800ms total loading
}

function initCustomCursor() {
    // Only on desktop
    if (window.innerWidth < 768) {
        document.body.style.cursor = 'auto'; // ensure native cursor fallback
        return;
    }
    
    const cursor = document.getElementById('cursor');
    const follower = document.getElementById('cursorFollower');
    if(!cursor || !follower) return;
    
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
    
    const hoverElements = document.querySelectorAll('a, button, .card, input, textarea');
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
}
