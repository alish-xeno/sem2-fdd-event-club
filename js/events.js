/* ============================================
   EVENTS PAGE JAVASCRIPT
   Handles event filtering functionality
============================================ */

document.addEventListener('DOMContentLoaded', () => {
    initEventFilters();
});

/**
 * Initialize event filter buttons
 * Allows users to filter events by category
 */
function initEventFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    if (filterButtons.length === 0 || eventCards.length === 0) return;
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Get filter category
            const filterCategory = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter events
            filterEvents(filterCategory, eventCards);
        });
    });
}

/**
 * Filter event cards based on selected category
 * @param {string} category - The category to filter by ('all', 'upcoming', 'workshops', etc.)
 * @param {NodeList} cards - The event card elements
 */
function filterEvents(category, cards) {
    cards.forEach(card => {
        const cardCategories = card.getAttribute('data-category');
        
        if (category === 'all') {
            // Show all cards
            card.classList.remove('hidden');
            fadeIn(card);
        } else if (cardCategories && cardCategories.includes(category)) {
            // Show matching cards
            card.classList.remove('hidden');
            fadeIn(card);
        } else {
            // Hide non-matching cards
            fadeOut(card);
        }
    });
}

/**
 * Fade in animation for event cards
 * @param {HTMLElement} element - The element to fade in
 */
function fadeIn(element) {
    element.style.opacity = '0';
    element.style.transform = 'translateY(20px)';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
    }, 10);
}

/**
 * Fade out animation for event cards
 * @param {HTMLElement} element - The element to fade out
 */
function fadeOut(element) {
    element.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
    element.style.opacity = '0';
    element.style.transform = 'translateY(-20px)';
    
    setTimeout(() => {
        element.classList.add('hidden');
    }, 300);
}
