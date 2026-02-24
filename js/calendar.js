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

// Calendar Data Structure (Simulated Backend)
const eventsData = {
    // February 2026 Events (One of each type from the legend)
    '2026-02-05': [{ title: 'Web Development Bootcamp', type: 'workshop' }], // Blue dot
    '2026-02-12': [{ title: 'Networking Night 2026', type: 'social' }], // Red dot
    '2026-02-18': [{ title: 'Career Fair Preparation', type: 'career' }], // Green dot
    '2026-02-22': [{ title: '48-Hour Code Jam', type: 'hackathon' }], // Purple dot
    '2026-02-28': [{ title: 'Annual UI/UX Design Challenge', type: 'competition' }], // Orange dot

    // Other events for testing past/future navigation
    '2026-01-15': [{ title: 'React Workshop', type: 'workshop' }],
    '2026-03-01': [{ title: 'Career Fair 2026', type: 'career' }],
    '2026-03-08': [{ title: 'Digital Marketing Bootcamp', type: 'workshop' }]
};

// Start at February 2026 based on the user request, but establish real "today" for highlighting
const realToday = new Date();
let currentDate = new Date(2026, 1, 1); // February is index 1

function generateCalendarGrid() {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    // Get month details
    const firstDay = new Date(year, month, 1);
    const lastDay = new Date(year, month + 1, 0);
    const startOffset = firstDay.getDay(); // Day of week (0-6)

    // Get previous month details for padding
    const prevMonthLastDay = new Date(year, month, 0).getDate();

    let html = '';

    // Add Day Headers
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        html += `<div class="calendar-day-header">${day}</div>`;
    });

    // Total cells in grid (usually 35 or 42)
    const totalCells = Math.ceil((lastDay.getDate() + startOffset) / 7) * 7;

    for (let i = 0; i < totalCells; i++) {
        let dayNum;
        let classes = ['calendar-day'];
        let dayDateStr = '';

        if (i < startOffset) {
            // Previous month cells
            classes.push('other-month');
            dayNum = prevMonthLastDay - startOffset + i + 1;
        } else if (i >= startOffset + lastDay.getDate()) {
            // Next month cells
            classes.push('other-month');
            dayNum = i - startOffset - lastDay.getDate() + 1;
        } else {
            // Current month cells
            dayNum = i - startOffset + 1;
            // Dates in eventsData use human 1-based months (e.g. '02' for Feb)
            dayDateStr = `${year}-${(month + 1).toString().padStart(2, '0')}-${dayNum.toString().padStart(2, '0')}`;

            // Check for real today
            if (year === realToday.getFullYear() && month === realToday.getMonth() && dayNum === realToday.getDate()) {
                classes.push('today');
            }

            // Check for events
            if (eventsData[dayDateStr]) {
                classes.push('has-event');
            }
        }

        html += `<div class="${classes.join(' ')}">`;
        html += dayNum;

        // Add event dots if applicable
        if (dayDateStr && eventsData[dayDateStr]) {
            const events = eventsData[dayDateStr];
            if (events.length > 1) {
                const titles = events.map(e => e.title).join(' & ');
                html += `\n                            <div class="event-dot event-dot--multiple event-type-${events[0].type}" title="${titles}"></div>`;
            } else {
                html += `\n                            <div class="event-dot event-type-${events[0].type}" title="${events[0].title}"></div>`;
            }
        }

        html += `\n                        </div>`;
    }

    // Inject into DOM
    const calendarElement = document.querySelector('.calendar');
    calendarElement.innerHTML = html;

    // Update Title
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    document.getElementById('currentMonth').textContent = `${monthNames[month]} ${year}`;

    // Re-initialize day click listeners for new elements
    initDayClick();
}

// Month Navigation
function initMonthNavigation() {
    const prevBtn = document.getElementById('prevMonth');
    const nextBtn = document.getElementById('nextMonth');

    prevBtn.addEventListener('click', () => {
        // Set to the first day of the previous month
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
        generateCalendarGrid();
    });

    nextBtn.addEventListener('click', () => {
        // Set to the first day of the next month
        currentDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
        generateCalendarGrid();
    });

    // Initial generation
    generateCalendarGrid();
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
