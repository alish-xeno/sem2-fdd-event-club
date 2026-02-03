/* ============================================
   BLOG.JS - Blog page specific JavaScript
   Handles category filtering
============================================ */

// Category Filter Functionality
function initBlogFilter() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const blogCards = document.querySelectorAll('.blog-card');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get selected category
            const category = button.getAttribute('data-category');

            // Filter blog cards
            blogCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// Newsletter Form Validation
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailInput = form.querySelector('input[type="email"]');
            
            if (emailInput.value.trim()) {
                alert('Thank you for subscribing! You will receive our newsletter weekly.');
                emailInput.value = '';
            }
        });
    }
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initBlogFilter();
    initNewsletterForm();
});
