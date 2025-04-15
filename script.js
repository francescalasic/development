document.addEventListener('DOMContentLoaded', function() {
    // Navigation links handling - smooth scroll for internal links
    const navLinks = document.querySelectorAll('nav ul li a');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Only handle smooth scroll for internal links (#)
            if (this.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetSection = document.querySelector(this.getAttribute('href'));
                
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Scroll animation for portfolio and service items
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.portfolio-item, .service-item, .competency-card');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };

    // Initialize animated elements
    const animatedElements = document.querySelectorAll('.portfolio-item, .service-item, .competency-card');
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s ease';
    });

    window.addEventListener('scroll', animateOnScroll);
    animateOnScroll(); // Initial call

    // Header color change on scroll
    const header = document.querySelector('header');
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.backgroundColor = 'var(--white)';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // Function to toggle the visibility of details for each competency card
    function toggleDetails(id) {
        const details = document.getElementById(id);
        if (details.style.display === "block") {
            details.style.display = "none";
        } else {
            details.style.display = "block";
        }
    }

    // Attach toggle function to buttons
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    readMoreBtns.forEach(button => {
        button.addEventListener('click', function() {
            const competencyId = button.previousElementSibling.id; // Get the id of the related competency-details
            toggleDetails(competencyId);
        });
    });
});
