#!/usr/bin/env python3
"""
Image Generator for Event Management Club Website
Creates placeholder images for all pages using PIL/Pillow
"""

from PIL import Image, ImageDraw, ImageFont
import os

# Configuration
IMAGE_DIR = "images"
COLORS = {
    "primary": "#2c3e50",
    "secondary": "#3498db",
    "accent": "#e74c3c",
    "light": "#ecf0f1",
    "dark": "#34495e"
}

def create_directory():
    """Ensure images directory exists"""
    if not os.path.exists(IMAGE_DIR):
        os.makedirs(IMAGE_DIR)
        print(f"✓ Created {IMAGE_DIR} directory")

def create_team_photo(filename, name, color="#3498db"):
    """Create circular team member photo placeholder"""
    size = 300
    img = Image.new('RGB', (size, size), color)
    draw = ImageDraw.Draw(img)
    
    # Draw circle background
    draw.ellipse([20, 20, size-20, size-20], fill=color, outline="#2c3e50", width=5)
    
    # Add initials
    initials = ''.join([word[0].upper() for word in name.split()[:2]])
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 80)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), initials, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((size - text_width) // 2, (size - text_height) // 2 - 10)
    draw.text(position, initials, fill="white", font=font)
    
    # Save
    filepath = os.path.join(IMAGE_DIR, filename)
    img.save(filepath, 'JPEG', quality=85)
    print(f"✓ Created {filename}")

def create_generic_image(filename, title, width=800, height=600, color="#3498db"):
    """Create generic placeholder image"""
    img = Image.new('RGB', (width, height), color)
    draw = ImageDraw.Draw(img)
    
    # Add gradient effect (simple diagonal lines)
    for i in range(0, width, 20):
        draw.line([(i, 0), (i+height, height)], fill="#2c3e50", width=2)
    
    # Add title text
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 40)
    except:
        font = ImageFont.load_default()
    
    # Get text bounding box for centering
    bbox = draw.textbbox((0, 0), title, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((width - text_width) // 2, (height - text_height) // 2)
    
    # Add text shadow
    draw.text((position[0]+2, position[1]+2), title, fill="#000000", font=font)
    draw.text(position, title, fill="white", font=font)
    
    # Save
    filepath = os.path.join(IMAGE_DIR, filename)
    img.save(filepath, 'JPEG', quality=85)
    print(f"✓ Created {filename}")

def create_logo(filename, text, width=300, height=150):
    """Create sponsor logo placeholder"""
    img = Image.new('RGBA', (width, height), (255, 255, 255, 0))
    draw = ImageDraw.Draw(img)
    
    # Add border
    draw.rectangle([5, 5, width-5, height-5], outline="#2c3e50", width=3)
    
    # Add text
    try:
        font = ImageFont.truetype("/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf", 30)
    except:
        font = ImageFont.load_default()
    
    bbox = draw.textbbox((0, 0), text, font=font)
    text_width = bbox[2] - bbox[0]
    text_height = bbox[3] - bbox[1]
    
    position = ((width - text_width) // 2, (height - text_height) // 2)
    draw.text(position, text, fill="#2c3e50", font=font)
    
    # Save as PNG
    filepath = os.path.join(IMAGE_DIR, filename)
    img.save(filepath, 'PNG')
    print(f"✓ Created {filename}")

def generate_all_images():
    """Generate all required images"""
    print("Generating placeholder images...\n")
    
    # Team photos
    print("Creating team photos...")
    team_members = [
        ("team-john.jpg", "John Doe", "#e74c3c"),
        ("team-sarah.jpg", "Sarah Lim", "#3498db"),
        ("team-ahmad.jpg", "Ahmad Rahman", "#2ecc71"),
        ("team-priya.jpg", "Priya Sharma", "#9b59b6"),
        ("team-kevin.jpg", "Kevin Tan", "#f39c12"),
        ("team-lisa.jpg", "Lisa Wong", "#1abc9c"),
        ("team-david.jpg", "David Chen", "#e67e22"),
        ("team-emma.jpg", "Emma Lee", "#16a085"),
        ("team-ryan.jpg", "Ryan Kumar", "#8e44ad"),
        ("team-mia.jpg", "Mia Abdullah", "#c0392b"),
        ("team-alex.jpg", "Alex Tan", "#27ae60"),
        ("team-nina.jpg", "Nina Zhang", "#2980b9"),
    ]
    
    for filename, name, color in team_members:
        create_team_photo(filename, name, color)
    
    # Member achievement photos
    print("\nCreating member photos...")
    member_photos = [
        ("member-sarah.jpg", "Sarah Tan", "#e74c3c"),
        ("member-david.jpg", "David Wong", "#3498db"),
        ("member-priya.jpg", "Priya Kumar", "#2ecc71"),
    ]
    
    for filename, name, color in member_photos:
        create_team_photo(filename, name, color)
    
    # Gallery photos
    print("\nCreating gallery images...")
    gallery_images = [
        ("gallery-workshop-1.jpg", "Workshop", "#3498db"),
        ("gallery-workshop-2.jpg", "Cybersecurity", "#e74c3c"),
        ("gallery-workshop-3.jpg", "AI/ML", "#9b59b6"),
        ("gallery-networking-1.jpg", "Networking", "#2ecc71"),
        ("gallery-networking-2.jpg", "Career Fair", "#f39c12"),
        ("gallery-social-1.jpg", "Social Event", "#1abc9c"),
        ("gallery-social-2.jpg", "Team Building", "#e67e22"),
        ("gallery-competition-1.jpg", "Hackathon", "#8e44ad"),
        ("gallery-competition-2.jpg", "Awards", "#c0392b"),
    ]
    
    for filename, title, color in gallery_images:
        create_generic_image(filename, title, 800, 600, color)
    
    # Blog images
    print("\nCreating blog images...")
    blog_images = [
        ("blog-featured.jpg", "Featured Post", "#2c3e50"),
        ("blog-hackathon.jpg", "Hackathon 2026", "#e74c3c"),
        ("blog-react.jpg", "React Tutorial", "#61dafb"),
        ("blog-success.jpg", "Success Story", "#2ecc71"),
        ("blog-partners.jpg", "New Partners", "#3498db"),
        ("blog-python.jpg", "Python Guide", "#3776ab"),
        ("blog-workshop.jpg", "Workshop Series", "#f39c12"),
        ("blog-startup.jpg", "Startup Story", "#9b59b6"),
        ("blog-awards.jpg", "Club Awards", "#ffd700"),
        ("blog-git.jpg", "Git Tutorial", "#f05032"),
    ]
    
    for filename, title, color in blog_images:
        create_generic_image(filename, title, 1200, 630, color)
    
    # Video thumbnails
    print("\nCreating video thumbnails...")
    video_images = [
        ("video-web-dev.jpg", "Web Dev Workshop", "#e74c3c"),
        ("video-ai.jpg", "AI Workshop", "#9b59b6"),
        ("video-cyber.jpg", "Cybersecurity", "#2c3e50"),
    ]
    
    for filename, title, color in video_images:
        create_generic_image(filename, title, 800, 450, color)
    
    # Event card placeholder
    print("\nCreating event images...")
    create_generic_image("event-workshop.jpg", "Event Workshop", 600, 400, "#3498db")
    
    # Sponsor logos
    print("\nCreating sponsor logos...")
    sponsors = [
        ("sponsor-microsoft.png", "Microsoft"),
        ("sponsor-google.png", "Google"),
        ("sponsor-aws.png", "AWS"),
        ("sponsor-github.png", "GitHub"),
        ("sponsor-cisco.png", "Cisco"),
        ("sponsor-jetbrains.png", "JetBrains"),
        ("sponsor-digitalocean.png", "DigitalOcean"),
        ("sponsor-mongodb.png", "MongoDB"),
        ("sponsor-ibm.png", "IBM"),
        ("sponsor-oracle.png", "Oracle"),
        ("sponsor-redhat.png", "Red Hat"),
    ]
    
    for filename, name in sponsors:
        create_logo(filename, name)
    
    print(f"\n✅ All images generated successfully in '{IMAGE_DIR}' directory!")
    print(f"📊 Total images created: {len(team_members) + len(member_photos) + len(gallery_images) + len(blog_images) + len(video_images) + 1 + len(sponsors)}")

if __name__ == "__main__":
    create_directory()
    generate_all_images()
