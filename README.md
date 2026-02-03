# Event Management Club Website

> A multi-page educational website for a university event management club, built with vanilla HTML5, CSS3, and JavaScript as part of the Fundamentals of Web Design and Development (CT053-3-1) course assignment.

## 📋 Project Overview

This is a **10-page responsive website** for Event Management Club at APU (Asia Pacific University), showcasing club activities, events, team members, and providing membership registration and contact forms. The project demonstrates proficiency in web fundamentals without using any frameworks.

**Academic Context:** 1st Year BScIT Assignment  
**Course:** Fundamentals of Web Design and Development  
**Technologies:** Pure HTML5, CSS3, JavaScript (No Frameworks)

## 🌟 Features

### Core Functionality
- ✅ **10 Fully Interlinked Pages** with consistent navigation
- ✅ **Responsive Design** - Mobile, tablet, and desktop friendly
- ✅ **Form Validation** - Client-side validation for contact and registration forms
- ✅ **Interactive Components** - Image lightbox, event filtering, FAQ accordion
- ✅ **Multimedia Integration** - YouTube video embeds, Google Maps integration
- ✅ **Semantic HTML5** - Proper document structure with semantic tags
- ✅ **CSS Variables** - Centralized theming system
- ✅ **Accessibility** - ARIA labels, keyboard navigation support

### Technical Highlights
- **Pure Vanilla Code** - No Bootstrap, jQuery, React, or any frameworks
- **Component Architecture** - Reusable UI components with internal CSS
- **Code Documentation** - Well-commented HTML, CSS, and JavaScript
- **Simple Complexity** - Clean, understandable code suitable for 1st-year level

## 📁 Project Structure

```
/
├── index.html                  # Homepage
├── pages/
│   ├── about.html              # About the club
│   ├── events.html             # Upcoming events (with filtering)
│   ├── contact.html            # Contact form + Google Maps
│   ├── team.html               # Team member profiles
│   ├── gallery.html            # Photo gallery with lightbox
│   ├── register.html           # Membership registration form
│   ├── faq.html                # Frequently asked questions
│   ├── sponsors.html           # Partners and sponsors
│   └── past-events.html        # Event archive with timeline
├── components/
│   ├── header.html             # Navigation header component
│   ├── footer.html             # Footer component
│   ├── hero.html               # Hero banner component
│   ├── event-card.html         # Event card component
│   ├── team-card.html          # Team member card component
│   ├── faq-item.html           # FAQ accordion component
│   └── README.md               # Component documentation
├── css/
│   ├── styles.css              # Global styles (loaded first on all pages)
│   ├── index.css               # Homepage styles
│   ├── about.css               # About page styles
│   ├── events.css              # Events page styles
│   ├── contact.css             # Contact page styles
│   ├── team.css                # Team page styles
│   ├── gallery.css             # Gallery page styles
│   ├── register.css            # Register page styles
│   ├── faq.css                 # FAQ page styles
│   ├── sponsors.css            # Sponsors page styles
│   └── past-events.css         # Past events page styles
├── js/
│   ├── main.js                 # Global JavaScript (loaded on all pages)
│   ├── form-validation.js      # Form validation utilities
│   ├── events.js               # Event filtering functionality
│   ├── gallery.js              # Gallery lightbox functionality
│   ├── contact.js              # Contact form initialization
│   └── register.js             # Registration form initialization
├── images/                     # Event photos, team photos, logos
├── media/                      # Audio/video files
├── documents/                  # Assignment specifications (reference)
└── .github/
    └── copilot-instructions.md # AI coding agent guidelines
```

## 🎨 CSS Architecture

### Root Global Styles (`styles.css`)
Loaded **first** on every page, contains:
- CSS Variables (colors, spacing, typography)
- CSS Reset
- Global typography styles
- Layout utilities (`.container`, `.grid`, `.section`)
- Button styles (`.btn-primary`, `.btn-accent`)
- Form styles (inputs, textareas, error handling)
- Responsive iframe containers (YouTube, Google Maps)

### Page-Specific Styles
Each page has its own CSS file for unique styling:
- `index.css` - Homepage stats grid, featured events
- `events.css` - Event filters, event card grid
- `gallery.css` - Image grid, lightbox modal
- `contact.css` - Form layout, contact info blocks
- And more...

**Loading Order:**
```html
<link rel="stylesheet" href="../css/styles.css">  <!-- 1. Root FIRST -->
<link rel="stylesheet" href="../css/events.css">  <!-- 2. Page-specific -->
```

## 🧩 Component System

Reusable UI blocks with **internal CSS** for easy copy-paste into pages:

| Component | Purpose | Dependencies |
|-----------|---------|--------------|
| `header.html` | Navigation with mobile menu | `main.js` (mobile toggle) |
| `footer.html` | Links, social, copyright | None |
| `hero.html` | Full-width banner with CTA | None |
| `event-card.html` | Event display card | None |
| `team-card.html` | Team member profile | None |
| `faq-item.html` | Expandable Q&A | Inline JavaScript |

See `components/README.md` for usage documentation.

## ⚙️ JavaScript Functionality

### Global (`main.js`)
- Mobile navigation toggle
- Smooth scroll for anchor links
- Active page highlighting
- Scroll to top button

### Page-Specific
- **`events.js`** - Event filtering by category (All, Workshops, Networking, etc.)
- **`gallery.js`** - Lightbox with prev/next navigation, keyboard controls
- **`form-validation.js`** - Email, phone, required field validation
- **`contact.js`** - Contact form initialization
- **`register.js`** - Registration form with terms checkbox validation

## 📄 Page Details

### 1. **Homepage** (`index.html`)
- Hero section with gradient background
- Club statistics (500+ members, 100+ events)
- Featured events preview (3 cards)
- Call-to-action banner

### 2. **About** (`pages/about.html`)
- Club mission statement
- Core values grid (4 values)
- Timeline of club history (2021-2026)
- FAQ accordion (4 questions)

### 3. **Events** (`pages/events.html`)
- Filter buttons (All, Upcoming, Workshops, Networking, Past)
- 8 event cards with filtering functionality
- YouTube video embed (event highlights)

### 4. **Contact** (`pages/contact.html`)
- Contact form with validation (name, email, phone, subject, message)
- Contact information blocks (location, email, phone, hours)
- **Google Maps embed** (APU Campus location)
- Directions information

### 5. **Team** (`pages/team.html`)
- Executive committee (6 members with full bios)
- Committee members (6 members compact view)
- Join team CTA section

### 6. **Gallery** (`pages/gallery.html`)
- 12 event photos in responsive grid
- Filter by category (workshops, networking, social, competitions)
- **Lightbox with prev/next navigation**
- Keyboard controls (arrows, ESC)

### 7. **Register** (`pages/register.html`)
- Membership benefits showcase (4 benefit cards)
- Multi-section registration form:
  - Personal info (name, email, phone)
  - Academic info (student ID, program, year)
  - Interests checkboxes (6 options)
  - Terms agreement checkbox
- **Full form validation** with error messages

### 8. **FAQ** (`pages/faq.html`)
- 20+ questions organized in 4 categories
- Accordion functionality (click to expand/collapse)
- Internal links to other pages
- Contact CTA for additional questions

### 9. **Sponsors** (`pages/sponsors.html`)
- Platinum sponsors (2 major partners)
- Gold sponsors (3 partners)
- Silver sponsors (6 partners in grid)
- Community partners list
- Become a sponsor CTA

### 10. **Past Events** (`pages/past-events.html`)
- Club statistics overview (50+ events, 2000+ attendees)
- Timeline of 6 past events with details
- Event highlights and attendance numbers
- Gallery CTA link

## 🎯 Assignment Requirements Met

✅ **10-20 Interlinked Pages** - 10 pages with consistent navigation  
✅ **HTML Elements** - Semantic HTML5 tags, forms, tables, lists, multimedia  
✅ **CSS Styling** - Flexbox, Grid, animations, responsive design  
✅ **JavaScript** - DOM manipulation, event handling, form validation  
✅ **Multimedia** - YouTube iframe embeds, Google Maps integration  
✅ **Forms** - Contact and registration forms with validation  
✅ **No Frameworks** - Pure vanilla HTML, CSS, JavaScript  
✅ **Code Documentation** - Extensive comments explaining functionality  
✅ **File Organization** - Clear folder structure, relative paths  
✅ **Responsive Design** - Mobile-first with media queries  

## 🚀 Getting Started

### Prerequisites
- Modern web browser (Chrome, Firefox, Safari, Edge)
- No server required - runs directly in browser

### Installation
1. Clone or download this repository
2. Open `index.html` in your web browser
3. Navigate through the site using the menu

### File Paths
All paths are relative:
- Pages link to: `pages/about.html`, `pages/events.html`, etc.
- CSS links: `../css/styles.css` (from pages)
- JS links: `../js/main.js` (from pages)
- Images: `../images/logo.png` (from pages)

## 🧪 Testing Checklist

- [ ] All navigation links work correctly
- [ ] Forms validate properly (try submitting empty fields)
- [ ] Event filtering buttons work (Events page)
- [ ] Gallery lightbox opens and navigates (prev/next)
- [ ] FAQ accordion expands/collapses
- [ ] Responsive design works on mobile (test with DevTools)
- [ ] YouTube video plays
- [ ] Google Maps displays correctly
- [ ] Validate HTML at [validator.w3.org](https://validator.w3.org)

## 🌐 Browser Compatibility

Tested and working on:
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📱 Responsive Breakpoints

```css
/* Tablet */
@media (max-width: 768px) { ... }

/* Mobile */
@media (max-width: 480px) { ... }
```

## 🎓 Learning Outcomes

This project demonstrates:
1. **HTML5** - Semantic markup, forms, multimedia embedding
2. **CSS3** - Layouts (Flexbox/Grid), animations, responsive design
3. **JavaScript** - DOM manipulation, event listeners, form validation
4. **Web Standards** - Accessibility (ARIA), SEO (meta tags), performance
5. **Project Organization** - Component architecture, file structure, documentation

## 👨‍💻 Development Notes

### CSS Variables Used
```css
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e74c3c;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 2rem;
```

### Form Validation Rules
- **Email:** Must match pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`
- **Phone:** Malaysian format `/^(\+?60|0)[0-9]{9,10}$/`
- **Required:** All fields marked with `*` must be filled

### Image Placeholder Notes
Current implementation uses placeholder paths (`images/logo.png`, etc.). In production:
- Replace with actual images
- Optimize images (<5MB, compressed)
- Use descriptive filenames

## 📝 Code Style

- **HTML:** Lowercase tags, semantic elements, proper indentation
- **CSS:** BEM-like naming (`.block__element--modifier`), comments for sections
- **JavaScript:** Descriptive function names, JSDoc comments, ES6 syntax

## 🔗 External Resources Used

- **Google Fonts:** None (using system fonts)
- **Icons:** Emoji icons (📧, 📍, 🎓) for simplicity
- **Maps:** Google Maps embed iframe
- **Video:** YouTube iframe embed

## 📜 License

This is an academic project created for educational purposes.

## 🙏 Acknowledgments

- APU (Asia Pacific University) for the assignment
- Event Management Club (fictional) concept
- Sponsors mentioned are for demonstration purposes only

---

**Project Status:** ✅ Complete (10 pages, all features implemented)  
**Created:** January 2026  
**Author:** BScIT Student, Year 1  
**Course:** CT053-3-1 Fundamentals of Web Design and Development
