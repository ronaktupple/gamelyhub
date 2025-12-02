# Blog Images Guide

This directory contains images for blog posts and author avatars.

## Directory Structure

```
public/images/
├── blog/           # Blog post thumbnail images
└── authors/        # Author avatar images
```

## Blog Post Images

Blog post thumbnails should be:
- **Dimensions**: 800x400px (2:1 aspect ratio)
- **Format**: JPG or PNG
- **File size**: Under 200KB for optimal loading
- **Naming**: Use the blog post slug (e.g., `puzzle-games-2024.jpg`)

### Current Blog Posts Needing Images:

1. `puzzle-games-2024.jpg` - Top 10 Puzzle Games
2. `subway-surfers-guide.jpg` - Subway Surfers Guide
3. `browser-games-evolution.jpg` - Browser Games Evolution
4. `mobile-gaming-trends.jpg` - Mobile Gaming Trends
5. `cookie-clicker-guide.jpg` - Cookie Clicker Strategy
6. `multiplayer-browser-games.jpg` - Multiplayer Browser Games

## Author Avatar Images

Author avatars should be:
- **Dimensions**: 400x400px (1:1 aspect ratio, square)
- **Format**: JPG or PNG
- **File size**: Under 100KB
- **Naming**: Use the author ID (e.g., `alex-gaming.jpg`)

### Current Authors Needing Avatars:

1. `alex-gaming.jpg` - Alex Thompson
2. `sarah-chen.jpg` - Sarah Chen
3. `mike-rodriguez.jpg` - Mike Rodriguez
4. `emma-wilson.jpg` - Emma Wilson

## Placeholder Images

The blog system automatically generates SVG placeholders if images are missing. However, for the best user experience, add actual images using the specifications above.

## How to Add Images

1. Create or source your images following the specifications above
2. Save them in the appropriate directory (`blog/` or `authors/`)
3. Use the exact filenames listed above
4. The blog will automatically display them

## Image Optimization Tips

- Use tools like TinyPNG or ImageOptim to compress images
- Ensure images are relevant to the blog content
- Use high-quality, gaming-related imagery
- Consider using tools like Canva or Figma to create custom graphics

## Fallback Behavior

If an image is not found, the system will:
1. Display an SVG placeholder with the post/author name
2. Continue to function normally
3. Not break the layout

This ensures the blog works even without images, but images greatly improve the user experience.
