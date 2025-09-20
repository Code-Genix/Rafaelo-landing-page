# Rafaelo Landing Page

A modern, responsive landing page for Rafaelo's TikTok Masterclass built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern UI design with custom styling
- 📱 Fully responsive layout
- ⚡ Interactive earnings calculator
- 🎯 Smooth scrolling navigation
- 🎪 Course modules showcase
- 💰 Pricing section
- 🚀 Fast development with Vite

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd rafaelo-landing-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:3000`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Project Structure

```
src/
├── components/
│   └── LandingPage.tsx    # Main landing page component
├── imports/
│   └── svg-gfdvud67i5.ts  # SVG path definitions
├── App.tsx                # Root component
├── main.tsx              # App entry point
└── index.css             # Global styles and Tailwind imports
```

## Features Overview

### Hero Section
- Eye-catching hero with gradient backgrounds
- Interactive CTA buttons
- Smooth scrolling navigation

### Earnings Calculator
- Interactive slider to estimate earnings
- Real-time calculations based on follower count
- Visual feedback with custom styling

### Course Modules
- 10 comprehensive modules
- Progressive disclosure design
- Visual hierarchy with highlighting

### Pricing Section
- Three-tier pricing structure
- Hover effects and animations
- Clear call-to-action buttons

### Community Section
- Social proof with member count
- Engaging visual presentation

## Customization

The landing page uses custom CSS classes and Tailwind utilities. Key styling can be modified in:

- `src/index.css` - Global styles and font imports
- `tailwind.config.js` - Tailwind configuration
- Individual components - Component-specific styling

## Fonts

The project uses several Google Fonts:
- DM Sans - Primary text
- Staatliches - Headlines
- Poppins - Secondary text

Custom fonts (Badrock, Cook Conthic) fall back to system fonts if unavailable.

## Browser Support

Modern browsers supporting ES2020+ features:
- Chrome 80+
- Firefox 72+
- Safari 13+
- Edge 80+

## License

This project is for educational/demonstration purposes.
