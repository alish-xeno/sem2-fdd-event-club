/* ============================================
   ROOT/GLOBAL JAVASCRIPT - Event Management Club
   Load this file on EVERY page
   Contains: Mobile nav, smooth scroll, utilities
============================================ */

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', () => {
    initMobileNav();
    initDropdowns();
    initSmoothScroll();
    highlightCurrentPage();
});

/* === MOBILE NAVIGATION TOGGLE === */
function initMobileNav() {
    const menuBtn = document.querySelector('.header__menu-btn');
    const nav = document.querySelector('.header__nav');
    
    if (menuBtn && nav) {
        menuBtn.addEventListener('click', () => {
            nav.classList.toggle('active');
            
            // Update aria-expanded for accessibility
            const isExpanded = nav.classList.contains('active');
            menuBtn.setAttribute('aria-expanded', isExpanded);
            
            // Change button icon
            menuBtn.textContent = isExpanded ? '✕' : '☰';
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header__container')) {
                nav.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.textContent = '☰';
            }
        });
        
        // Close menu when clicking a non-dropdown link
        const navLinks = nav.querySelectorAll('a:not(.dropdown-toggle)');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                nav.classList.remove('active');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.textContent = '☰';
            });
        });
    }
}

/* === DROPDOWN MENU FUNCTIONALITY === */
function initDropdowns() {
    const dropdowns = document.querySelectorAll('.header__nav .dropdown');
    
    dropdowns.forEach(dropdown => {
        const toggle = dropdown.querySelector('.dropdown-toggle');
        
        if (toggle) {
            // Mobile: Click to toggle
            toggle.addEventListener('click', (e) => {
                if (window.innerWidth <= 768) {
                    e.preventDefault();
                    
                    // Close other dropdowns
                    dropdowns.forEach(otherDropdown => {
                        if (otherDropdown !== dropdown) {
                            otherDropdown.classList.remove('active');
                        }
                    });
                    
                    // Toggle current dropdown
                    dropdown.classList.toggle('active');
                }
            });
        }
    });
    
    // Close dropdowns when window is resized above mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
}

/* === SMOOTH SCROLL FOR ANCHOR LINKS === */
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            const targetId = link.getAttribute('href');
            
            // Skip if it's just '#'
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

/* === HIGHLIGHT CURRENT PAGE IN NAVIGATION === */
function highlightCurrentPage() {
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.header__nav a');
    
    navLinks.forEach(link => {
        const linkPath = new URL(link.href).pathname;
        
        // Check if the link matches current page
        if (linkPath === currentPath) {
            link.classList.add('active');
            link.setAttribute('aria-current', 'page');
        }
        
        // Handle homepage special case
        if (currentPath === '/' || currentPath.endsWith('index.html')) {
            const homeLink = document.querySelector('.header__nav a[href*="index.html"], .header__nav a[href="/"]');
            if (homeLink) {
                homeLink.classList.add('active');
                homeLink.setAttribute('aria-current', 'page');
            }
        }
    });
}

/* === SCROLL TO TOP BUTTON === */
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    
    if (scrollBtn) {
        // Show/hide button based on scroll position
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 300) {
                scrollBtn.classList.add('show');
            } else {
                scrollBtn.classList.remove('show');
            }
        });
        
        // Scroll to top when clicked
        scrollBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
}

/* === UTILITY: DEBOUNCE FUNCTION === */
// Useful for scroll/resize event optimization
function debounce(func, wait = 100) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

/* === UTILITY: GET CURRENT PAGE NAME === */
function getCurrentPageName() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';
    return page.replace('.html', '');
}

// Initialize scroll to top if button exists
initScrollToTop();
