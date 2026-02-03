/* ============================================
   FORM VALIDATION JAVASCRIPT
   Shared validation functions for contact and registration forms
============================================ */

/**
 * Validate email format using regex
 * @param {string} email - The email address to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

/**
 * Validate phone number format
 * Accepts formats: +60123456789, 0123456789, 012-3456789
 * @param {string} phone - The phone number to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function isValidPhone(phone) {
    const phonePattern = /^(\+?60|0)[0-9]{9,10}$/;
    const cleanedPhone = phone.replace(/[\s-]/g, '');
    return phonePattern.test(cleanedPhone);
}

/**
 * Validate required field (not empty)
 * @param {string} value - The field value to validate
 * @returns {boolean} - True if not empty, false otherwise
 */
function isRequired(value) {
    return value.trim() !== '';
}

/**
 * Validate minimum length
 * @param {string} value - The field value to validate
 * @param {number} minLength - Minimum required length
 * @returns {boolean} - True if meets minimum, false otherwise
 */
function hasMinLength(value, minLength) {
    return value.trim().length >= minLength;
}

/**
 * Show error message for a form field
 * @param {HTMLElement} input - The input element
 * @param {string} message - The error message to display
 */
function showError(input, message) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    // Add error class to input
    input.classList.add('error');
    
    // Find or create error message element
    let errorElement = formGroup.querySelector('.error-message');
    if (!errorElement) {
        errorElement = document.createElement('span');
        errorElement.className = 'error-message';
        formGroup.appendChild(errorElement);
    }
    
    // Set error message and show it
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

/**
 * Clear error message for a form field
 * @param {HTMLElement} input - The input element
 */
function clearError(input) {
    const formGroup = input.closest('.form-group');
    if (!formGroup) return;
    
    // Remove error class from input
    input.classList.remove('error');
    
    // Hide error message
    const errorElement = formGroup.querySelector('.error-message');
    if (errorElement) {
        errorElement.classList.remove('show');
    }
}

/**
 * Validate a single form field
 * @param {HTMLElement} input - The input element to validate
 * @returns {boolean} - True if valid, false otherwise
 */
function validateField(input) {
    const value = input.value;
    const type = input.type;
    const required = input.hasAttribute('required');
    const name = input.name;
    
    // Clear previous errors
    clearError(input);
    
    // Check if required field is empty
    if (required && !isRequired(value)) {
        showError(input, 'This field is required');
        return false;
    }
    
    // If field is empty and not required, it's valid
    if (!required && value.trim() === '') {
        return true;
    }
    
    // Email validation
    if (type === 'email' || name === 'email') {
        if (!isValidEmail(value)) {
            showError(input, 'Please enter a valid email address');
            return false;
        }
    }
    
    // Phone validation
    if (type === 'tel' || name === 'phone') {
        if (!isValidPhone(value)) {
            showError(input, 'Please enter a valid phone number (e.g., 0123456789)');
            return false;
        }
    }
    
    // Text area minimum length
    if (input.tagName === 'TEXTAREA' && value.trim() !== '') {
        if (!hasMinLength(value, 10)) {
            showError(input, 'Please enter at least 10 characters');
            return false;
        }
    }
    
    return true;
}

/**
 * Validate entire form
 * @param {HTMLFormElement} form - The form element to validate
 * @returns {boolean} - True if all fields are valid, false otherwise
 */
function validateForm(form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    let isValid = true;
    
    inputs.forEach(input => {
        if (!validateField(input)) {
            isValid = false;
        }
    });
    
    return isValid;
}

/**
 * Initialize form validation
 * Adds event listeners for real-time validation
 * @param {string} formSelector - CSS selector for the form
 */
function initFormValidation(formSelector) {
    const form = document.querySelector(formSelector);
    if (!form) return;
    
    const inputs = form.querySelectorAll('input, textarea, select');
    
    // Validate on blur (when user leaves field)
    inputs.forEach(input => {
        input.addEventListener('blur', () => {
            validateField(input);
        });
        
        // Clear error on input (when user starts typing)
        input.addEventListener('input', () => {
            if (input.classList.contains('error')) {
                clearError(input);
            }
        });
    });
    
    // Validate on form submit
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        if (validateForm(form)) {
            // Form is valid - show success message
            showSuccessMessage(form);
            
            // Optional: Submit form data via AJAX here
            // For now, we'll just reset the form
            setTimeout(() => {
                form.reset();
            }, 2000);
        } else {
            // Scroll to first error
            const firstError = form.querySelector('.error');
            if (firstError) {
                firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
                firstError.focus();
            }
        }
    });
}

/**
 * Show success message after form submission
 * @param {HTMLFormElement} form - The form element
 */
function showSuccessMessage(form) {
    // Remove existing success message if any
    const existingMessage = form.querySelector('.success-message');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create success message
    const successMessage = document.createElement('div');
    successMessage.className = 'success-message';
    successMessage.style.cssText = `
        background-color: #d4edda;
        color: #155724;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
        border: 1px solid #c3e6cb;
        text-align: center;
        font-weight: 600;
    `;
    successMessage.textContent = '✓ Form submitted successfully! We will get back to you soon.';
    
    // Insert at top of form
    form.insertBefore(successMessage, form.firstChild);
    
    // Scroll to success message
    successMessage.scrollIntoView({ behavior: 'smooth', block: 'center' });
    
    // Remove after 5 seconds
    setTimeout(() => {
        successMessage.style.transition = 'opacity 0.3s ease';
        successMessage.style.opacity = '0';
        setTimeout(() => successMessage.remove(), 300);
    }, 5000);
}
