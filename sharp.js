document.addEventListener('DOMContentLoaded', function() {
    const footer = document.getElementById('footer');
    const brandLogos = document.querySelectorAll('.brand-logo');

    // Function to check if the footer is in the viewport
    function isInViewport(element) {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // Function to add 'visible' class to brand logos
    function checkVisibility() {
        if (isInViewport(footer)) {
            brandLogos.forEach((logo, index) => {
                logo.classList.add('visible');
                logo.style.animationDelay = `${index * 0.1}s`; // Stagger the animations
            });
            window.removeEventListener('scroll', checkVisibility); // Remove event listener after animation
        }
    }

    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);
});
