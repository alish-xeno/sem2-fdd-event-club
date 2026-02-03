#!/usr/bin/env python3
"""
Update all page headers to use the new dropdown menu structure
"""

import os
import re

# Header structure for pages in /pages/ folder
PAGES_HEADER = '''    <!-- ========== HEADER ========== -->
    <header class="header">
        <div class="header__container">
            <a href="../index.html" class="header__logo">
                <img src="../images/logo.png" alt="Event Club Logo">
                <span>Event Club</span>
            </a>
            <button class="header__menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>
            <nav class="header__nav">
                <ul>
                    <li><a href="../index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="about.html" class="dropdown-toggle{about_active}">About ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="team.html">Our Team</a></li>
                            <li><a href="achievements.html">Achievements</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="events.html" class="dropdown-toggle{events_active}">Events ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="events.html">Upcoming Events</a></li>
                            <li><a href="calendar.html">Event Calendar</a></li>
                            <li><a href="past-events.html">Past Events</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="resources.html" class="dropdown-toggle{resources_active}">Resources ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="blog.html">Blog</a></li>
                            <li><a href="gallery.html">Gallery</a></li>
                            <li><a href="resources.html">Resources</a></li>
                            <li><a href="sponsors.html">Sponsors</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="contact.html" class="dropdown-toggle{contact_active}">Contact ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="contact.html">Contact Us</a></li>
                            <li><a href="register.html">Register</a></li>
                            <li><a href="faq.html">FAQ</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>'''

# Header for index.html
INDEX_HEADER = '''    <!-- ========== HEADER ========== -->
    <header class="header">
        <div class="header__container">
            <a href="index.html" class="header__logo">
                <img src="images/logo.png" alt="Event Club Logo">
                <span>Event Club</span>
            </a>
            <button class="header__menu-btn" aria-label="Toggle navigation menu" aria-expanded="false">☰</button>
            <nav class="header__nav">
                <ul>
                    <li><a href="index.html">Home</a></li>
                    <li class="dropdown">
                        <a href="pages/about.html" class="dropdown-toggle">About ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="pages/about.html">About Us</a></li>
                            <li><a href="pages/team.html">Our Team</a></li>
                            <li><a href="pages/achievements.html">Achievements</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="pages/events.html" class="dropdown-toggle">Events ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="pages/events.html">Upcoming Events</a></li>
                            <li><a href="pages/calendar.html">Event Calendar</a></li>
                            <li><a href="pages/past-events.html">Past Events</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="pages/resources.html" class="dropdown-toggle">Resources ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="pages/blog.html">Blog</a></li>
                            <li><a href="pages/gallery.html">Gallery</a></li>
                            <li><a href="pages/resources.html">Resources</a></li>
                            <li><a href="pages/sponsors.html">Sponsors</a></li>
                        </ul>
                    </li>
                    <li class="dropdown">
                        <a href="pages/contact.html" class="dropdown-toggle">Contact ▾</a>
                        <ul class="dropdown-menu">
                            <li><a href="pages/contact.html">Contact Us</a></li>
                            <li><a href="pages/register.html">Register</a></li>
                            <li><a href="pages/faq.html">FAQ</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>
        </div>
    </header>'''

# Determine which menu should be active based on page
def get_active_menu(filename):
    about_pages = ['about.html', 'team.html', 'achievements.html']
    events_pages = ['events.html', 'calendar.html', 'past-events.html']
    resources_pages = ['blog.html', 'gallery.html', 'resources.html', 'sponsors.html']
    contact_pages = ['contact.html', 'register.html', 'faq.html']
    
    active = {
        'about_active': '',
        'events_active': '',
        'resources_active': '',
        'contact_active': ''
    }
    
    if filename in about_pages:
        active['about_active'] = ' active'
    elif filename in events_pages:
        active['events_active'] = ' active'
    elif filename in resources_pages:
        active['resources_active'] = ' active'
    elif filename in contact_pages:
        active['contact_active'] = ' active'
    
    return active

def update_header_in_file(filepath, new_header):
    """Replace the header section in a file"""
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Pattern to match the entire header section
    pattern = r'    <!-- ========== HEADER ========== -->.*?</header>'
    
    if re.search(pattern, content, re.DOTALL):
        updated_content = re.sub(pattern, new_header, content, flags=re.DOTALL)
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(updated_content)
        print(f"✓ Updated {os.path.basename(filepath)}")
        return True
    else:
        print(f"✗ Could not find header in {os.path.basename(filepath)}")
        return False

def main():
    print("Updating all page headers with dropdown menus...\n")
    
    # Update index.html
    index_path = 'index.html'
    if os.path.exists(index_path):
        update_header_in_file(index_path, INDEX_HEADER)
    
    # Update all pages in /pages/ folder
    pages_dir = 'pages'
    if os.path.exists(pages_dir):
        for filename in os.listdir(pages_dir):
            if filename.endswith('.html'):
                filepath = os.path.join(pages_dir, filename)
                
                # Get active menu for this page
                active_states = get_active_menu(filename)
                
                # Format header with active states
                header = PAGES_HEADER.format(**active_states)
                
                update_header_in_file(filepath, header)
    
    print("\n✅ All headers updated with dropdown menu structure!")

if __name__ == "__main__":
    main()
