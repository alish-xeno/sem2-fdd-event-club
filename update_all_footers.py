#!/usr/bin/env python3
"""
Update ALL footers to include Terms and Privacy Policy links
Handles different footer structures
"""

import os
import re

def update_footer_comprehensive(filepath, is_index=False):
    """Update footer in HTML file - handles multiple footer formats"""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        original_content = content
        
        # Determine the correct relative path
        privacy_link = "pages/privacy.html" if is_index else "privacy.html"
        terms_link = "pages/terms.html" if is_index else "terms.html"
        
        # Pattern 1: Old placeholder links
        pattern1 = r'<a href="#">Privacy Policy</a> \| \s*<a href="#">Terms of Service</a>'
        replacement1 = f'<a href="{privacy_link}">Privacy Policy</a> | \n                   <a href="{terms_link}">Terms of Service</a>'
        content = re.sub(pattern1, replacement1, content)
        
        # Pattern 2: Copyright without policy links
        pattern2 = r'<p class="footer__copyright">© 2026 Event Management Club\. All rights reserved\. \| Made with ❤️ by BScIT Students</p>'
        replacement2 = f'<p class="footer__copyright">© 2026 Event Management Club. All rights reserved. | <a href="{privacy_link}">Privacy Policy</a> | <a href="{terms_link}">Terms</a></p>'
        content = re.sub(pattern2, replacement2, content)
        
        # Pattern 3: Simple copyright line
        pattern3 = r'<p class="footer__copyright">© 2026 Event Management Club\. All rights reserved\.</p>'
        replacement3 = f'<p class="footer__copyright">© 2026 Event Management Club. All rights reserved. | <a href="{privacy_link}">Privacy Policy</a> | <a href="{terms_link}">Terms</a></p>'
        content = re.sub(pattern3, replacement3, content)
        
        # Pattern 4: Copyright in div
        pattern4 = r'(&copy; 2026 Event Management Club\. All rights reserved\.)\s*</p>'
        replacement4 = f'\\1 | <a href="{privacy_link}">Privacy Policy</a> | <a href="{terms_link}">Terms</a></p>'
        content = re.sub(pattern4, replacement4, content)
        
        # Check if replacement was made
        if content != original_content:
            with open(filepath, 'w', encoding='utf-8') as f:
                f.write(content)
            print(f"✓ Updated: {os.path.basename(filepath)}")
            return True
        else:
            print(f"⚠ No changes: {os.path.basename(filepath)}")
            return False
            
    except Exception as e:
        print(f"✗ Error: {os.path.basename(filepath)} - {e}")
        return False

def main():
    """Update all HTML files"""
    print("=" * 70)
    print("COMPREHENSIVE FOOTER UPDATE - Adding Privacy & Terms Links")
    print("=" * 70)
    
    updated_count = 0
    
    # Update index.html
    print("\n📄 INDEX PAGE:")
    if update_footer_comprehensive('index.html', is_index=True):
        updated_count += 1
    
    # Update all pages in /pages directory
    print("\n📁 INTERNAL PAGES:")
    pages_dir = 'pages'
    
    if os.path.exists(pages_dir):
        html_files = [f for f in os.listdir(pages_dir) if f.endswith('.html')]
        
        for filename in sorted(html_files):
            filepath = os.path.join(pages_dir, filename)
            if update_footer_comprehensive(filepath, is_index=False):
                updated_count += 1
    
    print("\n" + "=" * 70)
    print(f"✅ COMPLETE! Updated {updated_count} file(s)")
    print("=" * 70)

if __name__ == '__main__':
    main()
