/* ============================================
   REGISTER PAGE JAVASCRIPT
   Handles registration form initialization
============================================ */

/**
 * Initialize Register Page
 * Sets up form validation when DOM is ready
 */
document.addEventListener('DOMContentLoaded', () => {
    initRegisterForm();
});

/**
 * Initialize Registration Form Validation
 * Uses form-validation.js library to validate the registration form
 * Adds custom validation for terms checkbox
 */
function initRegisterForm() {
    // Initialize form validation from form-validation.js
    initFormValidation('#register-form');
    
    // Add custom validation for terms checkbox
    const termsCheckbox = document.getElementById('terms');
    const form = document.getElementById('register-form');
    
    if (termsCheckbox && form) {
        // Validate on form submit
        form.addEventListener('submit', (e) => {
            if (!termsCheckbox.checked) {
                e.preventDefault();
                const errorDiv = termsCheckbox.closest('.form-group').querySelector('.error-message');
                if (errorDiv) {
                    errorDiv.textContent = 'You must agree to the terms and conditions to register';
                    errorDiv.style.display = 'block';
                }
                termsCheckbox.closest('.checkbox-label').style.border = '2px solid var(--accent-color)';
            }
        });
        
        // Clear error when checkbox is checked
        termsCheckbox.addEventListener('change', () => {
            if (termsCheckbox.checked) {
                const errorDiv = termsCheckbox.closest('.form-group').querySelector('.error-message');
                if (errorDiv) {
                    errorDiv.style.display = 'none';
                }
                termsCheckbox.closest('.checkbox-label').style.border = 'none';
            }
        });
    }
    
    console.log('Registration form validation initialized');
}
