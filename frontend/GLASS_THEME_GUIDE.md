# 🎨 Glassmorphism Theme Installation Guide

## Overview
The frontend has been redesigned with:
- ✨ **Framer Motion** animations
- 🌊 **Glassmorphism** design theme
- 🎨 **Salesforce-inspired** color palette
- 🌈 **Animated background** with floating clouds
- 💫 **Smooth transitions** and micro-interactions

## Installation Steps

### 1. Install Dependencies

Navigate to the frontend directory and install the new dependencies:

```bash
cd frontend
npm install
```

This will install `framer-motion` along with existing dependencies.

### 2. Verify Installation

Check that framer-motion is installed:

```bash
npm list framer-motion
```

You should see: `framer-motion@11.0.0` (or similar version)

### 3. Start Development Server

```bash
npm run dev
```

The application will be available at: http://localhost:5173

## What's New

### 🎭 Animations
- **Page transitions** with fade and scale effects
- **Staggered card animations** for validation rules
- **Hover effects** on all interactive elements
- **Loading states** with rotating spinners
- **Alert notifications** with slide-in animations

### 🌊 Glass Theme
- **Glassmorphism cards** with backdrop blur
- **Transparent overlays** with frosted glass effect
- **Gradient backgrounds** with Salesforce colors
- **Animated clouds** floating across the screen
- **Dynamic gradient** background that shifts colors

### 🎨 Salesforce Colors
- Primary Blue: `#00a1e0`
- Dark Blue: `#032d60`
- Light Blue: `#1ab9ff`
- Sky Blue: `#0176d3`

### 📱 Responsive Design
- Fully responsive on all devices
- Touch-friendly interactions
- Optimized for mobile, tablet, and desktop

## File Structure

```
frontend/src/
├── styles/
│   └── glass-theme.css          # New glassmorphism theme
├── components/
│   ├── auth/
│   │   ├── Loginform.jsx        # Redesigned with animations
│   │   └── Domainselector.jsx   # Redesigned with glass effect
│   ├── common/
│   │   ├── Alert.jsx            # Animated alerts
│   │   ├── Button.jsx           # Glass buttons with hover effects
│   │   └── Loader.jsx           # Animated loader
│   ├── layout/
│   │   ├── Layout.jsx           # Animated layout wrapper
│   │   ├── Header.jsx           # Glass header with animations
│   │   └── Footer.jsx           # Glass footer
│   └── rules/
│       ├── RuleCard.jsx         # Animated glass cards
│       └── Rulesgrid.jsx        # Staggered grid animations
└── App.jsx                      # Updated with AnimatePresence
```

## Customization

### Change Colors

Edit `frontend/src/styles/glass-theme.css`:

```css
:root {
  --sf-blue: #00a1e0;           /* Primary color */
  --sf-dark-blue: #032d60;      /* Dark background */
  --sf-light-blue: #1ab9ff;     /* Accent color */
}
```

### Adjust Animation Speed

In component files, modify the `transition` prop:

```jsx
<motion.div
  transition={{ duration: 0.5 }}  // Change duration
>
```

### Modify Glass Effect

Edit blur and opacity in `glass-theme.css`:

```css
--glass-bg: rgba(255, 255, 255, 0.1);     /* Transparency */
--glass-blur: blur(10px);                  /* Blur amount */
```

## Performance

- Animations use GPU acceleration
- Framer Motion optimizes re-renders
- Backdrop filters are hardware-accelerated
- Minimal bundle size increase (~50KB gzipped)

## Browser Support

- ✅ Chrome 76+
- ✅ Firefox 103+
- ✅ Safari 15.4+
- ✅ Edge 79+

Note: Backdrop filter requires modern browsers. Fallback styles are provided.

## Troubleshooting

### Animations not working
- Clear browser cache
- Ensure framer-motion is installed: `npm list framer-motion`
- Check browser console for errors

### Glass effect not visible
- Ensure your browser supports `backdrop-filter`
- Try a different browser (Chrome/Edge recommended)
- Check if hardware acceleration is enabled

### Performance issues
- Reduce animation duration in components
- Disable cloud animations by removing the clouds div
- Use `will-change` CSS property sparingly

## Production Build

Build for production:

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

## Support

For issues or questions:
- Check the main README.md
- Open an issue on GitHub
- Email: imratdhakad752@gmail.com

---

Enjoy your new glassmorphism-themed Salesforce Validation Bridge! 🚀
