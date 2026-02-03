# Component Documentation

## Overview
This directory contains reusable UI components for the Event Management Club website. Each component includes its own internal CSS for easy copy-paste integration into pages.

## Components List

### 1. Header Component (`header.html`)
**Purpose:** Main navigation bar for all pages  
**Includes:** Logo, navigation menu, mobile menu button  
**CSS Variables Required:** `--primary-color`, `--accent-color`, `--spacing-md`, `--max-width`, `--border-radius`, `--shadow-md`  
**JavaScript Required:** `main.js` for mobile menu toggle  
**Responsive:** Mobile hamburger menu below 768px

**Usage:**
```html
<!-- Copy entire header.html content after <body> tag -->
```

---

### 2. Footer Component (`footer.html`)
**Purpose:** Site footer with links and contact info  
**Includes:** Quick links, social media icons, contact details, copyright  
**CSS Variables Required:** `--dark-color`, `--accent-color`, `--spacing-md`, `--spacing-lg`, `--max-width`  
**JavaScript Required:** None  
**Responsive:** Stack columns on mobile

**Usage:**
```html
<!-- Copy entire footer.html content before </body> tag -->
```

---

### 3. Hero Section (`hero.html`)
**Purpose:** Homepage banner with call-to-action  
**Includes:** Large headline, subtitle, CTA button  
**CSS Variables Required:** `--primary-color`, `--secondary-color`, `--accent-color`, `--spacing-md`  
**JavaScript Required:** None  
**Background Image:** Expects `../images/hero-bg.jpg` (fallback gradient provided)  
**Responsive:** Scales text size and height on mobile

**Usage:**
```html
<!-- Place inside <main> tag on homepage -->
```

---

### 4. Event Card (`event-card.html`)
**Purpose:** Display individual event information  
**Includes:** Image, title, date, location, time, description, status badge, register button  
**CSS Variables Required:** `--primary-color`, `--text-light`, `--border-radius`, `--spacing-md`, `--shadow-sm`  
**JavaScript Required:** None  
**Responsive:** Stacks meta info and footer on small screens

**Usage:**
```html
<!-- Use in grid layout: -->
<div class="grid grid-3">
    <!-- Paste event-card.html here -->
    <!-- Repeat for multiple events -->
</div>
```

---

### 5. Team Member Card (`team-card.html`)
**Purpose:** Display team member profile  
**Includes:** Circular photo, name, role, bio, social media links  
**CSS Variables Required:** `--primary-color`, `--accent-color`, `--light-color`, `--spacing-md`  
**JavaScript Required:** None  
**Responsive:** Reduces photo size on mobile

**Usage:**
```html
<!-- Use in grid layout: -->
<div class="grid grid-3">
    <!-- Paste team-card.html here -->
    <!-- Repeat for each member -->
</div>
```

---

### 6. FAQ Accordion (`faq-item.html`)
**Purpose:** Expandable question/answer sections  
**Includes:** Question button, expandable answer, toggle icon  
**CSS Variables Required:** `--primary-color`, `--accent-color`, `--border-color`, `--spacing-md`  
**JavaScript Required:** Included inline in component (toggle functionality)  
**Accessibility:** ARIA labels for expanded/collapsed states  
**Responsive:** Smaller text on mobile

**Usage:**
```html
<!-- Paste faq-item.html and duplicate for each Q&A -->
<!-- JavaScript is included in the component -->
```

---

## CSS Variables Reference
All components rely on these global CSS variables defined in `css/styles.css`:

```css
--primary-color: #2c3e50;
--secondary-color: #3498db;
--accent-color: #e74c3c;
--dark-color: #1a1a2e;
--light-color: #f8f9fa;
--text-color: #333333;
--text-light: #666666;
--border-color: #e0e0e0;

--spacing-xs: 0.25rem;
--spacing-sm: 0.5rem;
--spacing-md: 1rem;
--spacing-lg: 2rem;
--spacing-xl: 4rem;

--max-width: 1200px;
--border-radius: 8px;
--shadow-sm: 0 2px 4px rgba(0,0,0,0.1);
--shadow-md: 0 4px 12px rgba(0,0,0,0.15);
```

## Responsive Breakpoints
- **Mobile:** max-width: 480px
- **Tablet:** max-width: 768px
- **Desktop:** Above 768px

## Grid Layouts
Components work best with these grid classes from `styles.css`:

```html
<div class="grid grid-2">  <!-- 2 columns -->
<div class="grid grid-3">  <!-- 3 columns -->
<div class="grid grid-4">  <!-- 4 columns -->
```

Grids automatically become single-column on mobile (< 768px).

---

## Adding New Components
1. Create `component-name.html` in this directory
2. Include internal `<style>` block at the top
3. Use CSS variables for consistency
4. Add responsive breakpoints
5. Document usage in this README
6. Test on mobile, tablet, desktop

---

Last Updated: January 25, 2026
