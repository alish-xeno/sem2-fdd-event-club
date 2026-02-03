#!/usr/bin/env python3
"""
Generate Logo and Hero Background Images
"""

from PIL import Image, ImageDraw, ImageFont
import os

IMAGE_DIR = "images"

def create_logo(filename="logo.png", width=200, height=80):
    """Create Event Club logo"""
    img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Draw icon - circular shape with "E"
    circle_size = 60
    circle_pos = (10, (height - circle_size) // 2)
    draw.ellipse([circle_pos[0], circle_pos[1], 
                  circle_pos[0] + circle_size, circle_pos[1] + circle_size], 
                 fill="#e74c3c", outline="#2c3e50", width=3)
    
    # Add "E" in circle
    try:
        letter_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 36)
    except:
        letter_font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), "E", font=letter_font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    letter_pos = (circle_pos[0] + (circle_size - text_width) // 2, 
                  circle_pos[1] + (circle_size - text_height) // 2 - 5)
    draw.text(letter_pos, "E", fill="white", font=letter_font)
    
    # Add text "Event Club"
    try:
        text_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 24)
    except:
        text_font = ImageFont.load_default()
    
    text_pos = (circle_pos[0] + circle_size + 15, (height - 24) // 2)
    draw.text(text_pos, "Event", fill="#2c3e50", font=text_font)
    
    # Add "Club" in smaller text
    try:
        small_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
    except:
        small_font = ImageFont.load_default()
    
    club_pos = (text_pos[0], text_pos[1] + 26)
    draw.text(club_pos, "Club", fill="#3498db", font=small_font)
    
    filepath = os.path.join(IMAGE_DIR, filename)
    img.save(filepath, 'PNG')
    print(f"✓ Created {filename}")

def create_hero_bg(filename="hero-bg.jpg", width=1920, height=1080):
    """Create hero background image"""
    # Create gradient background
    img = Image.new('RGB', (width, height), "#2c3e50")
    draw = ImageDraw.Draw(img)
    
    # Create diagonal gradient effect
    for i in range(0, width, 50):
        # Calculate color gradient
        ratio = i / width
        r = int(44 + (52 - 44) * ratio)
        g = int(62 + (152 - 62) * ratio)
        b = int(80 + (219 - 80) * ratio)
        color = f"#{r:02x}{g:02x}{b:02x}"
        draw.rectangle([i, 0, i+50, height], fill=color)
    
    # Add geometric shapes
    for i in range(0, 10):
        x = i * 200
        y = i * 100
        size = 150
        draw.ellipse([x, y, x+size, y+size], outline="#ffffff", width=2)
    
    # Add connecting lines
    for i in range(0, width, 100):
        draw.line([(i, 0), (i+500, height)], fill="#34495e", width=3)
    
    filepath = os.path.join(IMAGE_DIR, filename)
    img.save(filepath, 'JPEG', quality=90)
    print(f"✓ Created {filename}")

def create_page_headers():
    """Create background images for page headers"""
    colors = {
        "about-header.jpg": "#2c3e50",
        "events-header.jpg": "#3498db",
        "gallery-header.jpg": "#9b59b6",
        "team-header.jpg": "#2ecc71",
        "contact-header.jpg": "#e74c3c"
    }
    
    for filename, color in colors.items():
        img = Image.new('RGB', (1200, 300), color)
        draw = ImageDraw.Draw(img)
        
        # Add pattern
        for i in range(0, 1200, 30):
            draw.line([(i, 0), (i+300, 300)], fill="#2c3e50", width=2)
        
        filepath = os.path.join(IMAGE_DIR, filename)
        img.save(filepath, 'JPEG', quality=85)
        print(f"✓ Created {filename}")

print("Generating logo and hero images...\n")
create_logo()
create_hero_bg()
print("\nGenerating page header backgrounds...")
create_page_headers()
print("\n✅ All branding images created!")
