# 🚀 Quick Start - Glassmorphism Theme

## Installation

```bash
# Navigate to frontend directory
cd frontend

# Install dependencies (includes framer-motion)
npm install

# Start development server
npm run dev
```

Visit: http://localhost:5173

## Features Showcase

### 🎨 Visual Effects
- **Animated Background**: Gradient shifts with floating clouds
- **Glass Cards**: Frosted glass effect with backdrop blur
- **Smooth Transitions**: Page and component animations
- **Hover Effects**: Interactive micro-animations
- **Loading States**: Rotating spinners and pulsing effects

### 🎭 Animations
- **Login Form**: Scale and fade-in animation
- **Rule Cards**: Staggered grid appearance
- **Buttons**: Hover scale and tap feedback
- **Alerts**: Slide-in notifications
- **Header/Footer**: Slide from top/bottom

### 🌊 Glassmorphism
- Transparent backgrounds with blur
- Layered depth with shadows
- Gradient overlays
- Border highlights
- Backdrop filters

## Component Overview

### LoginForm
- Animated logo with rotation on hover
- Glass card container
- Smooth domain selector transitions
- Pulsing login button

### RuleCard
- Glass effect with gradient top border
- Status badge with pulsing dot
- Hover lift animation
- Smooth toggle transitions

### Header
- Sticky glass header
- Rotating logo on hover
- Animated refresh icon when loading
- User info in glass container

### EmptyState
- Floating icon with rotation
- Pulsing rings animation
- Smooth fade-in text
- Animated action button

## Customization Tips

### Change Animation Speed
```jsx
// In any component
<motion.div
  transition={{ duration: 0.3 }} // Faster
  transition={{ duration: 1.0 }}  // Slower
>
```

### Adjust Glass Opacity
```css
/* In glass-theme.css */
--glass-bg: rgba(255, 255, 255, 0.15); /* More opaque */
--glass-bg: rgba(255, 255, 255, 0.05); /* More transparent */
```

### Modify Colors
```css
/* In glass-theme.css */
:root {
  --sf-blue: #00a1e0;      /* Your primary color */
  --sf-dark-blue: #032d60; /* Your dark color */
}
```

## Performance Tips

1. **Reduce Animations**: Comment out cloud animations if needed
2. **Disable Blur**: Remove `backdrop-filter` for older devices
3. **Optimize Images**: Use WebP format for backgrounds
4. **Lazy Load**: Components load on demand

## Browser Compatibility

| Browser | Version | Support |
|---------|---------|---------|
| Chrome  | 76+     | ✅ Full |
| Firefox | 103+    | ✅ Full |
| Safari  | 15.4+   | ✅ Full |
| Edge    | 79+     | ✅ Full |

## Troubleshooting

**Animations not smooth?**
- Enable hardware acceleration in browser
- Close other tabs/applications
- Update graphics drivers

**Glass effect not visible?**
- Check browser version
- Try Chrome/Edge for best support
- Disable browser extensions

**Build errors?**
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again
- Clear npm cache: `npm cache clean --force`

## Production Build

```bash
# Build optimized version
npm run build

# Preview production build
npm run preview
```

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ✅ Explore animations
4. ✅ Customize colors
5. ✅ Build for production

## Resources

- [Framer Motion Docs](https://www.framer.com/motion/)
- [Glassmorphism Guide](https://hype4.academy/tools/glassmorphism-generator)
- [Salesforce Design System](https://www.lightningdesignsystem.com/)

---

**Enjoy your beautiful new interface!** 🎉
