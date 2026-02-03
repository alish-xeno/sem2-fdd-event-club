/* ============================================
   CONTACT PAGE JAVASCRIPT
   Handles contact form initialization
============================================ */

/**
 * Initialize Contact Page
 * Sets up form validation when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    initContactForm();
});

/**
 * Initialize Contact Form Validation
 * Uses form-validation.js library to validate the contact form
 */
function initContactForm() {
    // Initialize form validation from form-validation.js
    initFormValidation('#contact-form');
    
    console.log('Contact form validation initialized');
}
