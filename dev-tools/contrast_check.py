#!/usr/bin/env python3
import math

def luminance(r, g, b):
    """Calculate relative luminance of RGB color"""
    def srgb_to_linear(val):
        val /= 255.0
        if val <= 0.03928:
            return val / 12.92
        else:
            return ((val + 0.055) / 1.055) ** 2.4
    
    r_lin = srgb_to_linear(r)
    g_lin = srgb_to_linear(g)
    b_lin = srgb_to_linear(b)
    
    return 0.2126 * r_lin + 0.7152 * g_lin + 0.0722 * b_lin

def contrast_ratio(hex1, hex2):
    """Calculate contrast ratio between two hex colors"""
    # Convert hex to RGB
    def hex_to_rgb(hex_color):
        hex_color = hex_color.lstrip('#')
        return tuple(int(hex_color[i:i+2], 16) for i in (0, 2, 4))
    
    rgb1 = hex_to_rgb(hex1)
    rgb2 = hex_to_rgb(hex2)
    
    l1 = luminance(*rgb1)
    l2 = luminance(*rgb2)
    
    lighter = max(l1, l2)
    darker = min(l1, l2)
    
    return (lighter + 0.05) / (darker + 0.05)

# Test improved colors from the website
colors_to_test = [
    ('#006978', '#FFFFFF', 'Primary Teal on White'),
    ('#006978', '#F5F5DC', 'Primary Teal on Background'),
    ('#2D5A4F', '#FFFFFF', 'Improved Primary Green on White'),
    ('#2D5A4F', '#F5F5DC', 'Improved Primary Green on Background'),
    ('#333333', '#FFFFFF', 'Dark Text on White'),
    ('#333333', '#F5F5DC', 'Dark Text on Background'),
    ('#666666', '#FFFFFF', 'Improved Light Text on White'),
    ('#666666', '#F5F5DC', 'Improved Light Text on Background'),
]

print('WCAG Color Contrast Analysis for Gathered Roots Cleaning (Updated)')
print('=' * 70)
print('AA Standard: 4.5:1 for normal text, 3:1 for large text')
print('AAA Standard: 7:1 for normal text, 4.5:1 for large text')
print('=' * 70)

for fg, bg, description in colors_to_test:
    ratio = contrast_ratio(fg, bg)
    aa_normal = '✓ PASS' if ratio >= 4.5 else '✗ FAIL'
    aa_large = '✓ PASS' if ratio >= 3.0 else '✗ FAIL'
    aaa_normal = '✓ PASS' if ratio >= 7.0 else '✗ FAIL'
    aaa_large = '✓ PASS' if ratio >= 4.5 else '✗ FAIL'
    
    print(f'{description:32} | {ratio:5.2f}:1')
    print(f'  AA Normal Text: {aa_normal:8} | AA Large Text: {aa_large:8}')
    print(f'  AAA Normal Text: {aaa_normal:7} | AAA Large Text: {aaa_large:7}')
    print('-' * 60) 