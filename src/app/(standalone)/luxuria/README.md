# Luxuria Hotel Website

A modern, responsive hotel website built with Next.js, TypeScript, and Tailwind CSS featuring dark mode support and a modular component architecture.

## Structure

```
luxuria/
├── page.tsx                 # Main page component
├── layout.tsx              # Layout with metadata
└── components/
    ├── index.ts            # Component exports
    ├── Header.tsx          # Navigation header with dark mode toggle
    ├── HeroSection.tsx     # Hero banner with CTA buttons
    ├── FeaturesSection.tsx # Hotel features showcase
    ├── ReviewsSection.tsx  # Customer testimonials
    ├── AmenitiesSection.tsx # Hotel amenities grid
    ├── CTASection.tsx      # Call-to-action section
    ├── Footer.tsx          # Site footer
    └── useDarkMode.tsx     # Dark mode hook
```

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Dark Mode**: System preference detection with manual toggle
- **SEO Optimized**: Complete metadata setup for social sharing
- **Modern UI**: Gradient backgrounds, hover effects, and smooth transitions
- **Modular Components**: Reusable, maintainable code structure
- **TypeScript**: Full type safety and IntelliSense support

## Components

### Header
- Logo and navigation menu
- Dark mode toggle button
- Responsive design with mobile considerations
- Book Now CTA button

### HeroSection
- Full-screen hero with background image
- Gradient overlay for text readability
- Compelling headline with gradient text effect
- Dual CTA buttons for booking and virtual tour

### FeaturesSection
- Three-column grid showcasing hotel highlights
- Icon-based feature cards with hover effects
- Premium Rooms, World-Class Spa, and Gourmet Dining

### ReviewsSection
- Customer testimonials with star ratings
- Avatar initials with gradient backgrounds
- Three featured reviews from different locations

### AmenitiesSection
- Eight hotel amenities in a responsive grid
- Emoji icons for visual appeal
- Infinity Pool, Yoga Studio, Tennis Court, etc.

### CTASection
- Final call-to-action before footer
- Gradient background matching brand colors
- Dual buttons for booking and special offers

### Footer
- Four-column layout with hotel information
- Quick navigation links
- Contact information
- Social media links
- Copyright notice with dynamic year

## Dark Mode Implementation

The dark mode functionality uses:
- `localStorage` for persistence
- System preference detection
- Tailwind CSS dark mode classes
- Smooth transitions between themes

## Metadata & SEO

Comprehensive metadata setup includes:
- Page title and description
- Open Graph tags for social sharing
- Twitter Card support
- Proper keywords and author information
- Responsive viewport settings

## Usage

The page is designed to be standalone and can be accessed at `/luxuria`. All components are self-contained and follow React best practices for maintainability and reusability.
