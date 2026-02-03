#!/usr/bin/env python3
"""
Update footer links in all HTML pages to include Terms and Privacy Policy links
"""

import os
import re

# Define the old and new footer bottom sections
OLD_FOOTER_PATTERN = r'<p>&copy; 2026 Event Management Club\. All rights reserved\. \| \s*<a href="#">Privacy Policy</a> \| \s*<a href="#">Terms of Service</a>\s*</p>'

NEW_FOOTER_PAGES = '''<p>&copy; 2026 Event Management Club. All rights reserved. | 
                   <a href="privacy.html">Privacy Policy</a> | 
                   <a href="terms.html">Terms of Service</a>
                </p>'''

NEW_FOOTER_INDEX = '''<p>&copy; 2026 Event Management Club. All rights reserved. | 
                   <a href="pages/privacy.html">Privacy Policy</a> | 
                   <a href="pages/terms.html">Terms of Service</a>
                </p>'''

def update_footer(filepath, is_index=False):
    """Update footer links in a single HTML file"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Choose the correct replacement based on file location
        new_footer = NEW_FOOTER_INDEX if is_index else NEW_FOOTER_PAGES
        
        # Replace the old footer pattern
        new_content = re.sub(OLD_FOOTER_PATTERN, new_footer, content, flags=re.MULTILINE | re.DOTALL)
        
        # Check if replacement was made
        if new_content != content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"✓ Updated: {filepath}")
            return True
        else:
            print(f"⚠ No changes needed: {filepath}")
            return False
    except Exception as e:
        print(f"✗ Error updating {filepath}: {e}")
        return False

def main():
    """Update all HTML files"""
    print("=" * 60)
    print("UPDATING FOOTER LINKS - Terms & Privacy Policy")
    print("=" * 60)
    
    # Update index.html
    print("\n[INDEX PAGE]")
    update_footer('index.html', is_index=True)
    
    # Update all pages in /pages directory
    print("\n[INTERNAL PAGES]")
    pages_dir = 'pages'
    
    if os.path.exists(pages_dir):
        html_files = [f for f in os.listdir(pages_dir) if f.endswith('.html')]
        
        for filename in sorted(html_files):
            filepath = os.path.join(pages_dir, filename)
            update_footer(filepath, is_index=False)
    
    print("\n" + "=" * 60)
    print("FOOTER UPDATE COMPLETE!")
    print("=" * 60)

if __name__ == '__main__':
    main()
