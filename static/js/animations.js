// Animations.js - Hiệu ứng cho trang web

document.addEventListener('DOMContentLoaded', function() {
    // Khởi tạo AOS Animation
    AOS.init({
        duration: 800,
        easing: 'ease-out',
        once: true
    });

    // Hiệu ứng staggered cho danh sách
    const staggeredLists = document.querySelectorAll('.staggered-list');
    staggeredLists.forEach(list => {
        const items = list.querySelectorAll('li, .item');
        items.forEach((item, index) => {
            item.setAttribute('data-aos', 'fade-up');
            item.setAttribute('data-aos-delay', (index * 100).toString());
        });
    });

    // Hiệu ứng ripple cho buttons
    const buttons = document.querySelectorAll('.btn, .btn-outline');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Hiệu ứng parallax cho background
    window.addEventListener('scroll', function() {
        const parallaxElements = document.querySelectorAll('.parallax');
        parallaxElements.forEach(element => {
            const scrollPosition = window.pageYOffset;
            const speed = element.getAttribute('data-speed') || 0.5;
            element.style.transform = `translateY(${scrollPosition * speed}px)`;
        });
    });

    // Hiệu ứng counter
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    const observerOptions = {
        threshold: 0.5
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                let count = 0;
                
                const updateCount = () => {
                    const increment = target / speed;
                    if (count < target) {
                        count += increment;
                        counter.innerText = Math.ceil(count);
                        setTimeout(updateCount, 1);
                    } else {
                        counter.innerText = target;
                    }
                };
                
                updateCount();
                observer.unobserve(counter);
            }
        });
    }, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });

    // Hiệu ứng typing
    const typingElements = document.querySelectorAll('.typing-effect');
    typingElements.forEach(element => {
        const text = element.getAttribute('data-text');
        const speed = element.getAttribute('data-speed') || 100;
        
        let i = 0;
        element.innerHTML = '';
        
        function typeWriter() {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
                setTimeout(typeWriter, speed);
            }
        }
        
        const typingObserver = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    typeWriter();
                    typingObserver.unobserve(element);
                }
            });
        }, { threshold: 0.5 });
        
        typingObserver.observe(element);
    });
});