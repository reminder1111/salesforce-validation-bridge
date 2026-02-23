# 🎨 Visual Design Specifications

## Design Philosophy

The redesign follows three core principles:
1. **Clarity**: Glass effects that don't obscure content
2. **Motion**: Purposeful animations that guide attention
3. **Salesforce DNA**: Colors and patterns from Salesforce brand

## Color System

### Primary Colors
```
Salesforce Blue:     #00a1e0  ████████
Dark Blue:           #032d60  ████████
Light Blue:          #1ab9ff  ████████
Sky Blue:            #0176d3  ████████
```

### Status Colors
```
Success Green:       #10b981  ████████
Success Light:       #34d399  ████████
Error Red:           #ef4444  ████████
Error Light:         #f87171  ████████
```

### Glass Colors
```
Glass Background:    rgba(255, 255, 255, 0.1)
Glass Border:        rgba(255, 255, 255, 0.2)
Glass Hover:         rgba(255, 255, 255, 0.15)
Text White:          rgba(255, 255, 255, 0.9)
Text Muted:          rgba(255, 255, 255, 0.7)
```

## Typography

### Font Family
```
Primary: 'Salesforce Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI'
Monospace: 'SF Mono', 'Monaco', 'Courier New' (for IDs)
```

### Font Sizes
```
Heading 1:    2rem (32px)    - Page titles
Heading 2:    1.5rem (24px)  - Section titles
Heading 3:    1.125rem (18px) - Card titles
Body:         1rem (16px)    - Regular text
Small:        0.875rem (14px) - Metadata
Tiny:         0.75rem (12px)  - Hints
```

### Font Weights
```
Regular:      400
Medium:       500
Semibold:     600
Bold:         700
```

## Spacing System

```
xs:   0.25rem (4px)
sm:   0.5rem (8px)
md:   1rem (16px)
lg:   1.5rem (24px)
xl:   2rem (32px)
2xl:  3rem (48px)
3xl:  4rem (64px)
```

## Border Radius

```
Small:        8px   - Inputs, badges
Medium:       12px  - Buttons, cards
Large:        16px  - Large cards
XLarge:       20px  - Containers
Circle:       50%   - Avatars, dots
```

## Shadows

### Glass Shadow
```css
box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.37);
```

### Hover Shadow
```css
box-shadow: 0 12px 40px 0 rgba(31, 38, 135, 0.3);
```

### Button Shadow
```css
box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
```

## Animations

### Timing Functions
```
Ease Out:     cubic-bezier(0.0, 0.0, 0.2, 1)
Ease In:      cubic-bezier(0.4, 0.0, 1, 1)
Ease In Out:  cubic-bezier(0.4, 0.0, 0.2, 1)
Spring:       type: "spring", stiffness: 200
```

### Duration
```
Fast:         200ms - 300ms
Medium:       400ms - 600ms
Slow:         800ms - 1000ms
Very Slow:    1500ms - 2000ms
```

### Common Animations

#### Fade In
```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.3 }}
```

#### Scale In
```jsx
initial={{ scale: 0.9 }}
animate={{ scale: 1 }}
transition={{ duration: 0.4 }}
```

#### Slide Up
```jsx
initial={{ y: 20, opacity: 0 }}
animate={{ y: 0, opacity: 1 }}
transition={{ duration: 0.5 }}
```

#### Hover Lift
```jsx
whileHover={{ y: -8, scale: 1.02 }}
transition={{ duration: 0.3 }}
```

## Component Specifications

### Login Card
```
Width:          480px (max)
Padding:        2rem (32px)
Border Radius:  20px
Background:     Glass gradient
Border:         1px solid rgba(255,255,255,0.2)
Shadow:         Glass shadow
```

### Rule Card
```
Width:          100% (min 320px)
Padding:        2rem (32px)
Border Radius:  16px
Background:     Glass gradient
Top Border:     4px gradient (status color)
Shadow:         Glass shadow
Hover:          Lift -8px, scale 1.02
```

### Button
```
Height:         40px (medium), 48px (large)
Padding:        0.625rem 1.25rem
Border Radius:  10px
Font Weight:    600
Background:     Gradient or glass
Border:         1px solid rgba(255,255,255,0.3)
Hover:          Scale 1.05
Active:         Scale 0.95
```

### Header
```
Height:         Auto (min 80px)
Padding:        1rem 2rem
Background:     rgba(255,255,255,0.08)
Backdrop Blur:  20px
Border Bottom:  1px solid rgba(255,255,255,0.1)
Position:       Sticky top
```

### Footer
```
Height:         Auto
Padding:        1.5rem 2rem
Background:     rgba(255,255,255,0.05)
Backdrop Blur:  10px
Border Top:     1px solid rgba(255,255,255,0.1)
```

## Responsive Breakpoints

```
Mobile:         < 640px
Tablet:         640px - 1024px
Desktop:        > 1024px
Wide:           > 1400px
```

### Grid System
```
Mobile:         1 column
Tablet:         2 columns
Desktop:        3 columns
Wide:           4 columns
```

## Accessibility

### Color Contrast
- Text on glass: WCAG AA compliant
- Buttons: WCAG AAA compliant
- Status indicators: Color + icon

### Focus States
```css
outline: 2px solid rgba(0, 161, 224, 0.6);
outline-offset: 2px;
```

### Motion
- Respects `prefers-reduced-motion`
- Can be disabled via settings
- No flashing animations

## Background Effects

### Gradient Animation
```css
background: linear-gradient(135deg, #032d60 0%, #00a1e0 50%, #1ab9ff 100%);
background-size: 400% 400%;
animation: gradientShift 15s ease infinite;
```

### Floating Clouds
```
Count:          3
Size:           250px - 400px
Opacity:        0.1
Blur:           40px
Animation:      20s float infinite
```

### Radial Overlays
```
Count:          3
Position:       20%, 40%, 80%
Opacity:        0.3 - 0.4
Blur:           None
```

## Icon System

### Sizes
```
Small:          16px
Medium:         20px
Large:          24px
XLarge:         32px
```

### Style
- Outline style preferred
- Rounded corners
- 2px stroke width
- White or status colors

## Loading States

### Spinner
```
Size:           80px
Border:         4px
Color:          White + transparent
Animation:      1s linear infinite
```

### Skeleton
```
Background:     rgba(255,255,255,0.1)
Animation:      Pulse 1.5s infinite
Border Radius:  Match content
```

## Best Practices

### Do's ✅
- Use glass effect for cards and overlays
- Animate state changes
- Provide hover feedback
- Use Salesforce colors
- Keep animations smooth (60fps)
- Test on multiple devices

### Don'ts ❌
- Don't overuse animations
- Don't make glass too opaque
- Don't use too many colors
- Don't animate on scroll (performance)
- Don't forget fallbacks
- Don't ignore accessibility

## Performance Guidelines

### Optimize
- Use `will-change` sparingly
- Prefer `transform` and `opacity`
- Avoid animating `width`/`height`
- Use GPU acceleration
- Lazy load components

### Monitor
- Keep bundle size < 500KB
- First paint < 1s
- Interaction < 100ms
- Animations at 60fps

---

**Design System Version**: 1.0.0
**Last Updated**: 2024
**Maintained By**: Frontend Team
