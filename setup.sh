#!/bin/bash

# Gym Template Setup Script
# This script helps you quickly set up a new gym website

echo "🏋️  Gym Master Template Setup"
echo "================================"
echo ""

# Create directories
echo "📁 Creating directory structure..."
mkdir -p public/images
mkdir -p public/videos
mkdir -p src/app
mkdir -p src/components
mkdir -p src/config
mkdir -p src/lib

# Create placeholder image directories
echo "🖼️  Setting up image placeholders..."
echo "Please add the following images to public/images/:"
echo "  - logo.png (200x200px)"
echo "  - about-main.jpg (800x1000px)"
echo "  - about-secondary.jpg (500x500px)"
echo "  - program-1.jpg to program-4.jpg (800x600px)"
echo "  - trainer-1.jpg to trainer-4.jpg (600x800px)"
echo "  - testimonial-1.jpg to testimonial-5.jpg (200x200px)"
echo "  - blog-1.jpg to blog-3.jpg (800x600px)"
echo ""

# Create .env.local if it doesn't exist
if [ ! -f .env.local ]; then
    echo "🔐 Creating .env.local file..."
    cp .env.local.example .env.local
    echo "✅ Created .env.local - Please add your API keys"
else
    echo "ℹ️  .env.local already exists"
fi

echo ""
echo "📦 Installing dependencies..."
echo "Run: yarn install"
echo ""

echo "✨ Setup complete!"
echo ""
echo "Next steps:"
echo "1. Run 'yarn install' to install dependencies"
echo "2. Edit src/config/site-config.ts with your gym details"
echo "3. Add images to public/images/ folder"
echo "4. Run 'yarn dev' to start development server"
echo "5. Customize sections as needed"
echo "6. Run 'yarn build' to build for production"
echo ""
echo "📚 Documentation:"
echo "  - README.md - General overview"
echo "  - TEMPLATES_GUIDE.md - Template variations"
echo "  - COMPONENTS_DOCS.md - Component usage"
echo "  - SEO_PERFORMANCE.md - Optimization guide"
echo "  - IMAGE_SPECS.md - Image requirements"
echo ""
echo "🎨 Available Themes: orange, yellow, red, purple, green"
echo "🚀 Happy building!"
