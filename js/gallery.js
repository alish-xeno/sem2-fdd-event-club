/* ============================================
   GALLERY PAGE JAVASCRIPT
   Handles image filtering and lightbox functionality
============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initGalleryFilters();
    initLightbox();
});

/* ============================================
   GALLERY FILTERING
============================================ */

/**
 * Initialize gallery filter buttons
 * Sets up click listeners for category filtering
 */
function initGalleryFilters() {
    const filterButtons = document.querySelectorAll('.gallery-filter__btn');
    const galleryItems = document.querySelectorAll('.gallery-item');

    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter category
            const filterCategory = button.getAttribute('data-filter');
            
            // Filter gallery items
            filterGalleryItems(filterCategory, galleryItems);
        });
    });
}

/**
 * Filter gallery items based on category
 * @param {string} category - The category to filter by ('all' or specific category)
 * @param {NodeList} items - The gallery items to filter
 */
function filterGalleryItems(category, items) {
    items.forEach(item => {
        const itemCategory = item.getAttribute('data-category');
        
        if (category === 'all' || itemCategory === category) {
            // Show item with fade-in effect
            item.classList.remove('hidden');
            fadeInItem(item);
        } else {
            // Hide item with fade-out effect
            fadeOutItem(item);
        }
    });
}

/**
 * Fade in animation for gallery item
 * @param {HTMLElement} element - The element to fade in
 */
function fadeInItem(element) {
    element.style.opacity = '0';
    element.style.display = 'block';
    
    setTimeout(() => {
        element.style.transition = 'opacity 0.5s ease';
        element.style.opacity = '1';
    }, 10);
}

/**
 * Fade out animation for gallery item
 * @param {HTMLElement} element - The element to fade out
 */
function fadeOutItem(element) {
    element.style.opacity = '1';
    element.style.transition = 'opacity 0.3s ease';
    element.style.opacity = '0';
    
    setTimeout(() => {
        element.classList.add('hidden');
    }, 300);
}

/* ============================================
   LIGHTBOX FUNCTIONALITY
============================================ */

let currentImageIndex = 0;
let visibleImages = [];

/**
 * Initialize lightbox functionality
 * Sets up click listeners for gallery items and lightbox controls
 */
function initLightbox() {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.querySelector('.lightbox__close');
    const prevBtn = document.querySelector('.lightbox__prev');
    const nextBtn = document.querySelector('.lightbox__next');

    // Add click listener to each gallery item
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            openLightbox(index);
        });
    });

    // Close button
    closeBtn.addEventListener('click', closeLightbox);

    // Previous button
    prevBtn.addEventListener('click', showPreviousImage);

    // Next button
    nextBtn.addEventListener('click', showNextImage);

    // Close on clicking outside image
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', handleKeyboardNav);
}

/**
 * Open lightbox and display selected image
 * @param {number} index - Index of the image to display
 */
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const galleryItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    
    // Update visible images array
    visibleImages = Array.from(galleryItems);
    currentImageIndex = Array.from(document.querySelectorAll('.gallery-item')).indexOf(galleryItems[index]);
    
    // Get image data
    const item = galleryItems[index];
    const imgSrc = item.querySelector('.gallery-item__img').src;
    const imgAlt = item.querySelector('.gallery-item__img').alt;
    const title = item.querySelector('.gallery-item__title').textContent;
    const caption = item.querySelector('.gallery-item__caption').textContent;
    
    // Update lightbox content
    document.querySelector('.lightbox__image').src = imgSrc;
    document.querySelector('.lightbox__image').alt = imgAlt;
    document.querySelector('.lightbox__title').textContent = title;
    document.querySelector('.lightbox__text').textContent = caption;
    
    // Show lightbox
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

/**
 * Close lightbox
 */
function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

/**
 * Show previous image in lightbox
 */
function showPreviousImage() {
    const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    const currentItem = visibleItems[currentImageIndex];
    const allItems = Array.from(document.querySelectorAll('.gallery-item'));
    const currentIndex = allItems.indexOf(currentItem);
    
    // Find previous visible item
    let prevIndex = currentIndex - 1;
    while (prevIndex >= 0 && allItems[prevIndex].classList.contains('hidden')) {
        prevIndex--;
    }
    
    // Wrap to end if at beginning
    if (prevIndex < 0) {
        prevIndex = allItems.length - 1;
        while (prevIndex >= 0 && allItems[prevIndex].classList.contains('hidden')) {
            prevIndex--;
        }
    }
    
    if (prevIndex >= 0) {
        const newIndex = Array.from(visibleItems).indexOf(allItems[prevIndex]);
        openLightbox(newIndex);
    }
}

/**
 * Show next image in lightbox
 */
function showNextImage() {
    const visibleItems = document.querySelectorAll('.gallery-item:not(.hidden)');
    const currentItem = visibleItems[currentImageIndex];
    const allItems = Array.from(document.querySelectorAll('.gallery-item'));
    const currentIndex = allItems.indexOf(currentItem);
    
    // Find next visible item
    let nextIndex = currentIndex + 1;
    while (nextIndex < allItems.length && allItems[nextIndex].classList.contains('hidden')) {
        nextIndex++;
    }
    
    // Wrap to beginning if at end
    if (nextIndex >= allItems.length) {
        nextIndex = 0;
        while (nextIndex < allItems.length && allItems[nextIndex].classList.contains('hidden')) {
            nextIndex++;
        }
    }
    
    if (nextIndex < allItems.length) {
        const newIndex = Array.from(visibleItems).indexOf(allItems[nextIndex]);
        openLightbox(newIndex);
    }
}

/**
 * Handle keyboard navigation for lightbox
 * @param {KeyboardEvent} e - The keyboard event
 */
function handleKeyboardNav(e) {
    const lightbox = document.getElementById('lightbox');
    
    if (!lightbox.classList.contains('active')) {
        return;
    }
    
    if (e.key === 'Escape') {
        closeLightbox();
    } else if (e.key === 'ArrowLeft') {
        showPreviousImage();
    } else if (e.key === 'ArrowRight') {
        showNextImage();
    }
}
