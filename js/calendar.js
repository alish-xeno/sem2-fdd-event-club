/* ============================================
   CALENDAR.JS - Calendar page specific JavaScript
   Handles view toggle and month navigation
============================================ */

// View Toggle Functionality
function initViewToggle() {
    const viewButtons = document.querySelectorAll('.view-btn');
    const monthView = document.getElementById('monthView');
    const listView = document.getElementById('listView');

    viewButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            viewButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');

            // Get selected view
            const view = button.getAttribute('data-view');

            // Toggle views
            if (view === 'month') {
                monthView.style.display = 'block';
                listView.style.display = 'none';
            } else {
                monthView.style.display = 'none';
                listView.style.display = 'block';
            }
        });
    });
}

// Month Navigation (Simple demo - would need backend in real app)
function initMonthNavigation() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');
    const currentMonth = document.getElementById('currentMonth');

    const months = [
        'January 2026', 'February 2026', 'March 2026', 'April 2026',
        'May 2026', 'June 2026', 'July 2026', 'August 2026',
        'September 2026', 'October 2026', 'November 2026', 'December 2026'
    ];

    let currentIndex = 0; // January 2026

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            currentMonth.textContent = months[currentIndex];
            // In a real app, this would reload calendar data
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < months.length - 1) {
            currentIndex++;
            currentMonth.textContent = months[currentIndex];
            // In a real app, this would reload calendar data
        }
    });
}

// Calendar Day Click (Optional - for future enhancement)
function initDayClick() {
    const calendarDays = document.querySelectorAll('.calendar-day.has-event');

    calendarDays.forEach(day => {
        day.addEventListener('click', () => {
            const eventDot = day.querySelector('.event-dot');
            if (eventDot) {
                const eventTitle = eventDot.getAttribute('title');
                alert(`Event: ${eventTitle}\n\nClick "View All Events" or switch to List View for more details.`);
            }
        });
    });
}

// Initialize all functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    initViewToggle();
    initMonthNavigation();
    initDayClick();
});
