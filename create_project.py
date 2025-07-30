"""
Project Page Generator
Creates new project pages for Joey Harounian's website
"""

import os
import re
from datetime import datetime

def clean_filename(name):
    """Convert project name to a clean filename"""
    # Remove special characters and replace spaces with hyphens
    clean = re.sub(r'[^a-zA-Z0-9\s-]', '', name)
    clean = re.sub(r'\s+', '-', clean.strip())
    return clean.lower()

def get_user_input():
    """Get all necessary information from user"""
    print("=== Project Page Generator ===\n")
    
    # Basic project info
    project_name = input("Project Name: ").strip()
    project_title = input("Project Title (for browser tab): ").strip() or project_name
    brief_description = input("Brief Description (one sentence): ").strip()
    
    print("\n--- Detailed Description ---")
    print("Enter the detailed description (press Enter twice to finish):")
    detailed_description = []
    while True:
        line = input()
        if line == "" and detailed_description and detailed_description[-1] == "":
            break
        detailed_description.append(line)
    detailed_description = "\n".join(detailed_description[:-1])  # Remove last empty line
    
    # Technical specifications
    print("\n--- Technical Specifications ---")
    specs = []
    while True:
        spec_category = input("Specification Category (or 'done' to finish): ").strip()
        if spec_category.lower() == 'done':
            break
        spec_value = input(f"Value for {spec_category}: ").strip()
        specs.append((spec_category, spec_value))
    
    # Features
    print("\n--- Features ---")
    features = []
    while True:
        feature = input("Feature (or 'done' to finish): ").strip()
        if feature.lower() == 'done':
            break
        features.append(feature)
    
    # Technologies
    print("\n--- Technologies Used ---")
    technologies = []
    while True:
        tech = input("Technology (or 'done' to finish): ").strip()
        if tech.lower() == 'done':
            break
        technologies.append(tech)
    
    # Images
    print("\n--- Images ---")
    main_image = input("Main image filename (e.g., main.jpg): ").strip()
    image_folder = input("Image folder name (e.g., calculator): ").strip()
    
    # Optional sections
    print("\n--- Optional Sections ---")
    include_gallery = input("Include gallery section? (y/n): ").lower().startswith('y')
    gallery_images = []
    if include_gallery:
        while True:
            img = input("Gallery image filename (or 'done' to finish): ").strip()
            if img.lower() == 'done':
                break
            gallery_images.append(img)
    
    include_3d_model = input("Include 3D model section? (y/n): ").lower().startswith('y')
    model_url = ""
    if include_3d_model:
        model_url = input("3D model embed URL: ").strip()
    
    include_technical_details = input("Include technical details section? (y/n): ").lower().startswith('y')
    technical_details = ""
    if include_technical_details:
        print("Enter technical details (press Enter twice to finish):")
        tech_details = []
        while True:
            line = input()
            if line == "" and tech_details and tech_details[-1] == "":
                break
            tech_details.append(line)
        technical_details = "\n".join(tech_details[:-1])
    
    include_future_improvements = input("Include future improvements section? (y/n): ").lower().startswith('y')
    future_improvements = []
    if include_future_improvements:
        while True:
            improvement = input("Future improvement (or 'done' to finish): ").strip()
            if improvement.lower() == 'done':
                break
            future_improvements.append(improvement)
    
    return {
        'project_name': project_name,
        'project_title': project_title,
        'brief_description': brief_description,
        'detailed_description': detailed_description,
        'specs': specs,
        'features': features,
        'technologies': technologies,
        'main_image': main_image,
        'image_folder': image_folder,
        'gallery_images': gallery_images,
        'model_url': model_url,
        'technical_details': technical_details,
        'future_improvements': future_improvements
    }

def generate_html(data):
    """Generate the HTML content based on user input"""
    
    # Generate specs HTML
    specs_html = ""
    for category, value in data['specs']:
        specs_html += f"""          <div class="spec-item">
            <h3>{category}</h3>
            <p>{value}</p>
          </div>
"""
    
    # Generate features HTML
    features_html = ""
    for feature in data['features']:
        features_html += f"          <li>{feature}</li>\n"
    
    # Generate technologies HTML
    tech_html = ""
    for tech in data['technologies']:
        tech_html += f'          <div class="skill-tag">{tech}</div>\n'
    
    # Generate gallery HTML
    gallery_html = ""
    if data['gallery_images']:
        for img in data['gallery_images']:
            gallery_html += f"""        <div class="featured-image-section">
          <img src="./Assets/Images/{data['image_folder']}/{img}" alt="{data['project_name']} Detail" class="project-page-image">
        </div>
"""
    
    # Generate 3D model HTML
    model_html = ""
    if data['model_url']:
        model_html = f"""      <!-- Optional: 3D Model Section -->
      <div class="content-card">
        <h2 class="section-title">3D Model</h2>
        <div class="model-container">
          <iframe src="{data['model_url']}" width="100%" height="480" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" frameborder="0"></iframe>
        </div>
      </div>
"""
    
    # Generate technical details HTML
    tech_details_html = ""
    if data['technical_details']:
        tech_details_html = f"""      <!-- Optional: Code/Technical Details Section -->
      <div class="content-card">
        <h2 class="section-title">Technical Details</h2>
        <p class="project-text">{data['technical_details']}</p>
      </div>
"""
    
    # Generate future improvements HTML
    future_improvements_html = ""
    if data['future_improvements']:
        improvements_list = ""
        for improvement in data['future_improvements']:
            improvements_list += f"          <li>{improvement}</li>\n"
        
        future_improvements_html = f"""      <!-- Optional: Future Improvements Section -->
      <div class="content-card">
        <h2 class="section-title">Future Improvements</h2>
        <ul class="features-list">
{improvements_list}        </ul>
      </div>
"""
    
    # Generate gallery section HTML
    gallery_section_html = ""
    if data['gallery_images']:
        gallery_section_html = f"""      <!-- Optional: Additional Images Section -->
      <div class="content-card">
        <h2 class="section-title">Gallery</h2>
{gallery_html}      </div>
"""
    
    html_template = f"""<!DOCTYPE html>
<html>
<head>
  <title> JH | {data['project_title']} </title>
  <link rel="shortcut icon" type="image/x-icon" href="/Assets/Images/JH logo/JH PSD.png" />
  <script src="./script.js" defer></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>

<body>
  <div id="navbar">
    <div id="logo-wrapper">
      <a href="./"><img src="./Assets/Images/JH logo/JH Home.png" alt="HOME" id="logo"/></a>
    </div>
    <div id="navbar-links">
      <li class="navbar-link">
        <a href="./projects.html" class="navbar-link-text"></a>
      </li>
      <li class="navbar-link">
        <a href="./publications.html" class="navbar-link-text"></a>
      </li>
    </div>
  </div> 

  <!-- Hero Section -->
  <div class="project-container">
    <div id="project-hero">
      <div class="hero-content">
        <h1 class="hero-title">{data['project_name']}</h1>
        <p class="hero-subtitle">{data['brief_description']}</p>
        <a href="./projects.html" class="back-button">← Back to Projects</a>
      </div>
    </div>
  </div>

  <!-- Main Content -->
  <div class="project-container">
    <!-- Featured Image -->
    <div class="featured-image-section">
      <img src="./Assets/Images/{data['image_folder']}/{data['main_image']}" alt="{data['project_name']}" class="hero-image">
    </div>

    <!-- Project Details -->
    <div class="project-sections">
      <div class="content-card">
        <h2 class="section-title">Description</h2>
        <p class="project-text">{data['detailed_description']}</p>
      </div>

      <div class="content-card">
        <h2 class="section-title">Technical Specifications</h2>
        <div class="specs-grid">
{specs_html}        </div>
      </div>

      <div class="content-card">
        <h2 class="section-title">Features</h2>
        <ul class="features-list">
{features_html}        </ul>
      </div>

      <!-- Skills/Tags -->
      <div class="content-card">
        <h2 class="section-title">Technologies Used</h2>
        <div class="skills-container">
{tech_html}        </div>
      </div>

{gallery_section_html}{model_html}{tech_details_html}{future_improvements_html}    </div>
  </div>

  <footer>
    <span>Copyright © Joseph Harounian 2025</span>
  </footer>
</body>
</html>"""
    
    return html_template

def main():
    """Main function to run the project generator"""
    try:
        # Get user input
        data = get_user_input()
        
        # Generate filename
        filename = clean_filename(data['project_name']) + ".html"
        
        # Generate HTML content
        html_content = generate_html(data)
        
        # Write to file
        with open(filename, 'w', encoding='utf-8') as f:
            f.write(html_content)
        
        print(f"\n✅ Successfully created: {filename}")
        print(f"📁 Make sure to create the image folder: Assets/Images/{data['image_folder']}/")
        print(f"🖼️  Add your images to the folder, including: {data['main_image']}")
        
        if data['gallery_images']:
            print(f"📸 Gallery images needed: {', '.join(data['gallery_images'])}")
        
        print(f"\n📝 Don't forget to add this project to projects.html!")
        
    except KeyboardInterrupt:
        print("\n\n❌ Cancelled by user")
    except Exception as e:
        print(f"\n❌ Error: {e}")

if __name__ == "__main__":
    main() 