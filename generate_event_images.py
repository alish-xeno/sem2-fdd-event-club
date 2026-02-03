#!/usr/bin/env python3
"""
Additional Event Images Generator
Creates specific event card images for homepage and events page
"""

from PIL import Image, ImageDraw, ImageFont
import os

IMAGE_DIR = "images"

def create_event_image(filename, title, subtitle, width=600, height=400, color="#3498db"):
    """Create event card image with title and subtitle"""
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    
    # Add gradient effect
    for i in range(0, width, 30):
        draw.line([(i, 0), (i+height, height)], fill="#2c3e50", width=3)
    
    # Add icon/emoji
    try:
        emoji_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 60)
    except:
        emoji_font = ImageFont.load_default()
    
    # Determine emoji based on event type
    emoji_map = {
        "Workshop": "💻",
        "Networking": "🤝",
        "Photography": "📸",
        "Speaking": "🎤",
        "Career": "💼",
        "Marketing": "📊",
        "AI": "🤖",
        "Celebration": "🎉"
    }
    
    emoji = "📅"  # default
    for key, value in emoji_map.items():
        if key.lower() in title.lower():
            emoji = value
            break
    
    # Draw emoji
    bbox = draw.textbbox((0, 0), emoji, font=emoji_font)
    text_width = bbox[2] - bbox[0]
    emoji_pos = ((width - text_width) // 2, 80)
    draw.text(emoji_pos, emoji, fill="white", font=emoji_font)
    
    # Add title
    try:
        title_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 32)
        subtitle_font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf", 18)
    except:
        title_font = ImageFont.load_default()
        subtitle_font = ImageFont.load_default()
    
    # Draw title (with shadow)
    bbox = draw.textbbox((0, 0), title, font=title_font)
    text_width = bbox[2] - bbox[0]
    title_pos = ((width - text_width) // 2, height // 2)
    
    draw.text((title_pos[0]+2, title_pos[1]+2), title, fill="#000000", font=title_font)
    draw.text(title_pos, title, fill="white", font=title_font)
    
    # Draw subtitle
    bbox = draw.textbbox((0, 0), subtitle, font=subtitle_font)
    text_width = bbox[2] - bbox[0]
    subtitle_pos = ((width - text_width) // 2, height // 2 + 50)
    
    draw.text(subtitle_pos, subtitle, fill="#ecf0f1", font=subtitle_font)
    
    # Save
    filepath = os.path.join(IMAGE_DIR, filename)
    img.save(filepath, 'JPEG', quality=85)
    print(f"✓ Created {filename}")

def generate_event_images():
    """Generate specific event images"""
    print("Generating specific event images...\n")
    
    events = [
        # Homepage events
        ("event-web-dev.jpg", "Web Development", "Learn HTML, CSS & JS", "#3498db"),
        ("event-networking.jpg", "Networking Night", "Connect & Grow", "#2ecc71"),
        ("event-photography.jpg", "Photography", "Capture The Moment", "#9b59b6"),
        
        # Events page - upcoming
        ("event-speaking.jpg", "Public Speaking", "Build Confidence", "#e74c3c"),
        ("event-career-fair.jpg", "Career Fair", "Explore Opportunities", "#f39c12"),
        ("event-marketing.jpg", "Digital Marketing", "Master Online Strategy", "#1abc9c"),
        
        # Events page - past
        ("event-ai-talk.jpg", "AI & Machine Learning", "Future of Technology", "#8e44ad"),
        ("event-celebration.jpg", "Year-End Celebration", "Celebrate Success", "#e67e22"),
    ]
    
    for filename, title, subtitle, color in events:
        create_event_image(filename, title, subtitle, 600, 400, color)
    
    print(f"\n✅ Created {len(events)} event images!")

if __name__ == "__main__":
    generate_event_images()
