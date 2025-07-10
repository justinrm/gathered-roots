# Gathered Roots Cleaning Website Style Guide

## 1. Brand Colors

| Name                   | Hex     | Usage                          |
| ---------------------- | ------- | ------------------------------ |
| Background             | #F5F5DC | Page backgrounds               |
| Primary Accent         | #1E2B28 | CTAs, highlights, links, icons |
| Primary Accent         | #2F4F4F | Brand, headings, logo          |
| Alt Accent             | #D8C3A5 | Alternate accent, logo         |
| Secondary Accent Hover | #D8C3A5 | Button hover, link hover       |
| Text Dark              | #1E2B28 | Main text, headings            |
| Text Light             | #757575 | Subtle text, captions          |
| Borders                | #E0E0E0 | Card borders, dividers         |

### Card-Specific Colors

| Name                 | Hex     | Usage                          |
| -------------------- | ------- | ------------------------------ |
| Card Background      | #FFFFFF | Primary card background        |
| Card Background Soft | #FEFEFE | Alternative card background    |
| Card Border          | #E8E5E0 | Card borders and dividers      |
| Card Text Primary    | #2D3748 | Primary text in cards          |
| Card Text Secondary  | #4A5568 | Secondary text in cards        |
| Card Accent Light    | #F8F6F3 | Light accent for card elements |

## 2. Typography

- **Headings:** Montserrat, sans-serif (font-headings)
- **Body:** Open Sans, sans-serif (font-sans)
- **Hierarchy:**
  - H1: 2.25rem (text-4xl), font-semibold
  - H2: 1.875rem (text-3xl), font-semibold
  - H3: 1.5rem (text-2xl), font-semibold
  - H4: 1.25rem (text-xl), font-medium
  - H5: 1.125rem (text-lg), font-medium
  - H6: 1rem (text-base), font-medium
  - Body: 1rem (text-base), font-regular

## 3. Imagery & Iconography

- **Photography:**
  - Use high-quality, professional, bright, and clean images.
  - Show real, happy clients, team, and sparkling spaces.
  - Avoid generic or cheesy stock photos.
  - Store images in `/public/images/`.
- **Iconography:**
  - Use Heroicons (already installed), Feather, or Material Icons.
  - Minimalist, modern line or subtly filled icons.
  - Consistent size (e.g., w-6 h-6 or w-12 h-12 for feature icons).

## 4. UI Components

- **Button:**
  - Primary: `bg-primary_accent_teal text-white hover:bg-secondary_accent_hover`
  - Secondary: `bg-transparent border border-primary_accent_teal text-primary_accent_teal hover:bg-primary_accent_teal hover:text-white`
  - Rounded corners, clear focus/active states.
- **Card:**
  - Base: `bg-card-background border border-card-border rounded-lg p-6 shadow-card`
  - Hover: `hover:shadow-card-hover hover:-translate-y-0.5`
  - Focus: `focus-within:shadow-card-focus focus-within:border-primary-accent-teal`
  - Text: Use `text-card-text-primary` for headings, `text-card-text-secondary` for body text
  - Smooth transitions for all interactive states
- **Forms:**
  - Simple, clear labels, minimal fields, validation messages.
  - Use Tailwind's form plugin if needed.
- **Navigation:**
  - Sticky header, mobile hamburger menu.
  - Use `text-primary_accent_green` for logo/brand.
- **Testimonial Card:**
  - Quote, author, optional photo, star rating (yellow-400 for filled stars).
  - Light background with subtle shadows and borders.
- **Service Card:**
  - Icon, title, description, CTA button.
  - Light background with hover effects.

## 5. Card Design Principles

- **Light Aesthetic:** All cards use light backgrounds (`card-background`) for a clean, professional appearance
- **Subtle Depth:** Use gentle shadows (`shadow-card`) that intensify on hover (`shadow-card-hover`)
- **Proper Contrast:** Dark text on light backgrounds ensures excellent readability
- **Interactive Feedback:** Subtle lift animations on hover create engaging user experience
- **Consistent Styling:** All card types follow the same base design system

## 6. Accessibility & Responsiveness

- Sufficient color contrast (WCAG 2.1 AA)
- Keyboard navigability, focus rings
- Alt text for all informative images
- Semantic HTML, clear hierarchy
- Mobile-first layouts, test on all screen sizes

## 7. Example Usage

See `/components/` for implementation of Button, Card, ServiceCard, TestimonialCard, Navbar, and form elements. All use Tailwind utility classes for color, spacing, and states.

## 8. Resources

- [Google Fonts: Montserrat, Open Sans](https://fonts.google.com/)
- [Heroicons](https://heroicons.com/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)

---

_This style guide is a living document. Update as the brand or design system evolves._
