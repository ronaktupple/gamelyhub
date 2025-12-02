#!/usr/bin/env python3
"""
Image Optimization Script for Gamely Hub
Optimizes slider images to improve website performance
"""

import os
from PIL import Image
import sys

def optimize_image(input_path, output_path=None, quality=85, max_width=1200):
    """
    Optimize an image by resizing and compressing
    
    Args:
        input_path: Path to input image
        output_path: Path to output image (if None, overwrites input)
        quality: JPEG quality (1-100)
        max_width: Maximum width in pixels
    """
    try:
        # Open image
        img = Image.open(input_path)
        
        # Convert RGBA to RGB if necessary
        if img.mode in ('RGBA', 'LA', 'P'):
            background = Image.new('RGB', img.size, (255, 255, 255))
            if img.mode == 'P':
                img = img.convert('RGBA')
            background.paste(img, mask=img.split()[-1] if img.mode in ('RGBA', 'LA') else None)
            img = background
        
        # Resize if too large
        if img.width > max_width:
            ratio = max_width / img.width
            new_height = int(img.height * ratio)
            img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)
        
        # Save with optimization
        if output_path is None:
            output_path = input_path
        
        img.save(output_path, 'JPEG', quality=quality, optimize=True, progressive=True)
        
        # Get file sizes
        original_size = os.path.getsize(input_path) if input_path != output_path else 0
        new_size = os.path.getsize(output_path)
        
        if original_size > 0:
            savings = ((original_size - new_size) / original_size) * 100
            print(f"✓ Optimized: {os.path.basename(output_path)}")
            print(f"  Original: {original_size/1024:.1f}KB → New: {new_size/1024:.1f}KB (Saved {savings:.1f}%)")
        else:
            print(f"✓ Created: {os.path.basename(output_path)} ({new_size/1024:.1f}KB)")
        
        return True
    except Exception as e:
        print(f"✗ Error optimizing {input_path}: {e}")
        return False

def main():
    slider_dir = "public/images/slider"
    
    if not os.path.exists(slider_dir):
        print(f"Error: Directory {slider_dir} not found")
        sys.exit(1)
    
    print("Optimizing slider images...")
    print("=" * 60)
    
    # Get all JPG files
    jpg_files = [f for f in os.listdir(slider_dir) if f.lower().endswith('.jpg')]
    
    if not jpg_files:
        print("No JPG files found in slider directory")
        sys.exit(1)
    
    success_count = 0
    for filename in jpg_files:
        input_path = os.path.join(slider_dir, filename)
        
        # Create backup
        backup_path = input_path + '.backup'
        if not os.path.exists(backup_path):
            import shutil
            shutil.copy2(input_path, backup_path)
            print(f"Created backup: {filename}.backup")
        
        # Optimize
        if optimize_image(input_path, quality=85, max_width=1200):
            success_count += 1
        print()
    
    print("=" * 60)
    print(f"Optimization complete: {success_count}/{len(jpg_files)} images optimized")
    print("\nBackup files created with .backup extension")
    print("If you're happy with the results, you can delete the .backup files")

if __name__ == "__main__":
    main()
