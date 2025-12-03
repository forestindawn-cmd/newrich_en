/* =============================================
   New Rich Asset - Global Distribution Partner
   Main JavaScript
   ============================================= */

document.addEventListener('DOMContentLoaded', function() {
    
    // === Smooth Scroll for Navigation Links ===
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // === Navbar Background on Scroll ===
    const nav = document.querySelector('nav');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            nav.style.background = 'rgba(0, 29, 61, 0.98)';
        } else {
            nav.style.background = 'rgba(0, 29, 61, 0.95)';
        }
    });

    // === Mobile Menu Toggle ===
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    
    if (mobileMenuBtn) {
        mobileMenuBtn.addEventListener('click', function() {
            navLinks.classList.toggle('active');
            this.classList.toggle('active');
        });
    }

    // === Partner With Us Button ===
    const navCta = document.querySelector('.nav-cta');
    if (navCta) {
        navCta.addEventListener('click', function() {
            document.getElementById('contact').scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // === Form Submission Handler ===
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Form will use mailto: action by default
            // Add any additional validation or handling here if needed
        });
    }

    // === Intersection Observer for Animations ===
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    // Observe elements for scroll animations
    document.querySelectorAll('.stat-item, .solution-card, .network-card, .channel-item').forEach(el => {
        observer.observe(el);
    });

});
