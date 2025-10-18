// about-animations.js - Enhanced animations for about page

class AboutAnimations {
    constructor() {
        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.createSparkles();
            this.startTypewriterEffect();
            this.initScrollAnimations();
            this.initHoverEffects();
            this.initImageLoaders();
            this.initLightbox();
        });
    }

    createSparkles() {
        const profileContainer = document.querySelector('.profile-image-container');
        if (!profileContainer) return;

        // Create more sparkle elements for continuous effect
        for (let i = 0; i < 8; i++) {
            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            
            // Randomize sparkle colors
            const colors = ['#ffffff', '#3182ce', '#ff6b6b', '#4ecdc4', '#ffd93d'];
            const randomColor = colors[Math.floor(Math.random() * colors.length)];
            sparkle.style.background = randomColor;
            
            profileContainer.appendChild(sparkle);
        }
    }

    startTypewriterEffect() {
        const heroTitle = document.querySelector('.hero-title');
        const heroSubtitle = document.querySelector('.hero-subtitle');
        
        if (!heroTitle || !heroSubtitle) return;

        const originalTitle = heroTitle.textContent;
        const originalSubtitle = heroSubtitle.textContent;

        // Clear text and add typing class
        heroTitle.textContent = '';
        heroSubtitle.textContent = '';
        heroTitle.classList.add('typing');
        heroSubtitle.classList.add('typing');

        let titleIndex = 0;
        let subtitleIndex = 0;

        const typeTitle = () => {
            if (titleIndex < originalTitle.length) {
                heroTitle.textContent += originalTitle.charAt(titleIndex);
                titleIndex++;
                setTimeout(typeTitle, 100);
            } else {
                heroTitle.classList.remove('typing');
                setTimeout(typeSubtitle, 500);
            }
        };

        const typeSubtitle = () => {
            if (subtitleIndex < originalSubtitle.length) {
                heroSubtitle.textContent += originalSubtitle.charAt(subtitleIndex);
                subtitleIndex++;
                setTimeout(typeSubtitle, 80);
            } else {
                heroSubtitle.classList.remove('typing');
                this.animateTags();
            }
        };

        // Start typing after a short delay
        setTimeout(typeTitle, 1000);
    }

    animateTags() {
        const tags = document.querySelectorAll('.tag');
        tags.forEach((tag, index) => {
            setTimeout(() => {
                tag.style.animation = 'bounceIn 0.6s ease forwards';
            }, index * 150);
        });
    }

    initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.animationPlayState = 'running';
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Observe all animated elements
        const animatedElements = document.querySelectorAll(
            '.skill-card, .timeline-item, .info-card, .education-card, .language-card'
        );
        animatedElements.forEach(el => observer.observe(el));
    }

    initHoverEffects() {
        // Add click effects to tags
        const tags = document.querySelectorAll('.tag');
        tags.forEach(tag => {
            tag.addEventListener('click', () => {
                tag.style.transform = 'scale(0.95)';
                setTimeout(() => {
                    tag.style.transform = '';
                }, 150);
            });
        });

        // Add ripple effect to cards
        const cards = document.querySelectorAll('.skill-card, .info-card');
        cards.forEach(card => {
            card.addEventListener('mouseenter', this.createRippleEffect);
        });
    }

    createRippleEffect(event) {
        const card = event.currentTarget;
        const ripple = document.createElement('span');
        const rect = card.getBoundingClientRect();
        
        const size = Math.max(rect.width, rect.height);
        const x = event.clientX - rect.left - size / 2;
        const y = event.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        card.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    }

    initImageLoaders() {
        const images = document.querySelectorAll('img');
        images.forEach(img => {
            // Add loading animation
            if (!img.complete) {
                img.style.opacity = '0';
                img.addEventListener('load', () => {
                    img.style.transition = 'opacity 0.5s ease';
                    img.style.opacity = '1';
                });
            }
        });
    }

    initLightbox() {
        const hobbyImages = document.querySelectorAll('.hobby-images img');
        const lightbox = document.createElement('div');
        lightbox.className = 'lightbox';
        lightbox.innerHTML = `
            <button class="lightbox-close">&times;</button>
            <img class="lightbox-img" src="" alt="">
        `;

        document.body.appendChild(lightbox);
        const lightboxImg = lightbox.querySelector('.lightbox-img');
        const closeBtn = lightbox.querySelector('.lightbox-close');

        hobbyImages.forEach(img => {
            img.addEventListener('click', () => {
                lightboxImg.src = img.src;
                lightboxImg.alt = img.alt;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });

        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        });

        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });

        // Close with ESC key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        });
    }
}

// Initialize animations when script loads
new AboutAnimations();

// Add CSS for additional effects
const additionalStyles = `
    @keyframes bounceIn {
        0% { transform: scale(0.3); opacity: 0; }
        50% { transform: scale(1.05); }
        70% { transform: scale(0.9); }
        100% { transform: scale(1); opacity: 1; }
    }

    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.5);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }

    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }

    .skill-card, .info-card {
        position: relative;
        overflow: hidden;
    }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);