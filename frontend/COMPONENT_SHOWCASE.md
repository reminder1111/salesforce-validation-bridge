# 🎨 Component Showcase

## Visual Guide to All Redesigned Components

### 🔐 Login Form

**Location**: `src/components/auth/Loginform.jsx`

**Features**:
- Centered glass card (max-width: 480px)
- Animated logo in glass container
- Domain selector with radio buttons
- Gradient login button
- Security badge at bottom

**Animations**:
```jsx
Card: Scale from 0.9 to 1.0 (0.6s)
Logo: Scale from 0 to 1 (spring animation)
Content: Staggered fade-in (0.3s - 0.7s delays)
Button: Hover scale 1.05, tap 0.95
```

**Colors**:
- Background: Glass gradient
- Button: Blue gradient (#00a1e0 → #0176d3)
- Text: White with 90% opacity

---

### 🎛️ Domain Selector

**Location**: `src/components/auth/Domainselector.jsx`

**Features**:
- Radio button cards with glass effect
- Production and Custom domain options
- Animated custom domain input field
- Visual feedback on selection

**Animations**:
```jsx
Cards: Slide from left (staggered 0.1s)
Selection: Radio dot scales in
Custom Input: Height expands from 0
Hover: Scale 1.02
```

**States**:
- Unselected: `rgba(255,255,255,0.08)`
- Selected: Blue gradient with glow
- Hover: Slight scale increase

---

### 🎴 Rule Card

**Location**: `src/components/rules/RuleCard.jsx`

**Features**:
- Glass card with gradient top border
- Status badge (enabled/disabled)
- Entity name with icon
- Rule ID in glass container
- Toggle button

**Animations**:
```jsx
Card: Fade in from bottom (0.3s)
Hover: Lift -8px, scale 1.02
Status Dot: Pulsing (2s infinite)
Top Border: Scale X from 0 to 1
Button: Scale feedback on click
```

**Layout**:
```
┌─────────────────────────────┐
│ ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓ │ ← Gradient border
│                             │
│ Rule Name          [Badge] │
│ 🏠 Entity Name             │
│                             │
│ ┌─────────────────────┐   │
│ │ Rule ID             │   │
│ │ 18 characters       │   │
│ └─────────────────────┘   │
│                             │
│ [Enable/Disable Button]    │
└─────────────────────────────┘
```

---

### 📊 Rules Grid

**Location**: `src/components/rules/Rulesgrid.jsx`

**Features**:
- Responsive grid layout
- Staggered card animations
- Auto-fill columns

**Grid Breakpoints**:
```
Mobile:  1 column  (< 640px)
Tablet:  2 columns (640px - 1024px)
Desktop: 3 columns (> 1024px)
```

**Animations**:
```jsx
Container: Fade in
Cards: Stagger children (0.1s delay each)
```

---

### 🎯 Header

**Location**: `src/components/layout/Header.jsx`

**Features**:
- Sticky glass header
- Animated logo (rotates on hover)
- User info in glass container
- Refresh and logout buttons

**Layout**:
```
┌─────────────────────────────────────────────┐
│ [Logo] Validation Rules Bridge  [User Info] │
│        Manage Salesforce...      [Refresh]  │
│                                  [Logout]    │
└─────────────────────────────────────────────┘
```

**Animations**:
```jsx
Header: Slide from top (-100px to 0)
Logo: Rotate 360° on hover
Refresh Icon: Spin when loading
Buttons: Scale on hover
```

---

### 📄 Footer

**Location**: `src/components/layout/Footer.jsx`

**Features**:
- Glass footer with links
- Copyright text
- External links with hover effect

**Layout**:
```
┌─────────────────────────────────────────────┐
│ © 2024 Salesforce...    [Docs] [GitHub]    │
└─────────────────────────────────────────────┘
```

**Animations**:
```jsx
Footer: Slide from bottom (100px to 0)
Links: Scale 1.05 on hover
```

---

### 🔘 Button

**Location**: `src/components/common/Button.jsx`

**Variants**:
1. **Primary**: Blue gradient
2. **Secondary**: Glass with white text
3. **Success**: Green gradient
4. **Danger**: Red gradient

**Sizes**:
- Medium: 40px height
- Large: 48px height

**Animations**:
```jsx
Hover: Scale 1.05, shadow increase
Tap: Scale 0.95
Disabled: Opacity 0.6, no interaction
```

**Example**:
```jsx
<Button variant="primary" size="large">
  Click Me
</Button>
```

---

### 🔔 Alert

**Location**: `src/components/common/Alert.jsx`

**Types**:
- Success: Green with checkmark
- Error: Red with X icon

**Features**:
- Slide-in animation
- Auto-dismiss option
- Close button with rotation

**Animations**:
```jsx
Enter: Slide from top + fade in
Exit: Slide to top + fade out
Close Button: Rotate 90° on hover
```

**Layout**:
```
┌─────────────────────────────────────┐
│ [✓] Success message here      [×]  │
└─────────────────────────────────────┘
```

---

### ⏳ Loader

**Location**: `src/components/common/Loader.jsx`

**Features**:
- Centered glass card
- Rotating outer ring
- Pulsing inner circle
- Loading text with fade

**Animations**:
```jsx
Outer Ring: Rotate 360° (1s linear infinite)
Inner Circle: Scale pulse (1.5s infinite)
Text: Opacity pulse (2s infinite)
```

**Visual**:
```
    ╭─────────╮
    │    ◯    │  ← Rotating ring
    │   ●●●   │  ← Pulsing circle
    │  ●●●●●  │
    │   ●●●   │
    │    ●    │
    │         │
    │ Loading │
    ╰─────────╯
```

---

### 📭 Empty State

**Location**: `src/components/rules/Emptystate.jsx`

**Features**:
- Large animated icon
- Title and message
- Action button
- Pulsing rings

**Animations**:
```jsx
Icon: Rotate + scale (4s infinite)
Rings: Pulse outward (2s infinite)
Content: Staggered fade-in
Button: Hover scale
```

**Layout**:
```
┌─────────────────────────┐
│                         │
│         ◯◯◯            │ ← Animated icon
│        ◯◯◯◯◯           │
│         ◯◯◯            │
│                         │
│    No Rules Found       │
│                         │
│  No validation rules    │
│  match your criteria    │
│                         │
│   [Load Rules Button]   │
│                         │
└─────────────────────────┘
```

---

## 🎨 Common Patterns

### Glass Effect
```css
background: rgba(255, 255, 255, 0.1);
backdrop-filter: blur(10px);
border: 1px solid rgba(255, 255, 255, 0.2);
border-radius: 16px;
box-shadow: 0 8px 32px rgba(31, 38, 135, 0.37);
```

### Hover Effect
```jsx
whileHover={{ scale: 1.05, y: -5 }}
transition={{ duration: 0.3 }}
```

### Fade In
```jsx
initial={{ opacity: 0 }}
animate={{ opacity: 1 }}
transition={{ duration: 0.5 }}
```

### Stagger Children
```jsx
variants={{
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}}
```

---

## 🌈 Background Effects

### Animated Gradient
```css
background: linear-gradient(
  135deg,
  #032d60 0%,
  #00a1e0 50%,
  #1ab9ff 100%
);
background-size: 400% 400%;
animation: gradientShift 15s ease infinite;
```

### Floating Clouds
```jsx
<div className="clouds">
  <div className="cloud"></div> // 3 clouds
  <div className="cloud"></div>
  <div className="cloud"></div>
</div>
```

### Radial Overlays
```css
background-image:
  radial-gradient(circle at 20% 50%, rgba(0,161,224,0.3) 0%, transparent 50%),
  radial-gradient(circle at 80% 80%, rgba(26,185,255,0.3) 0%, transparent 50%);
```

---

## 📱 Responsive Behavior

### Mobile (< 640px)
- Single column layout
- Larger touch targets
- Simplified animations
- Stacked header elements

### Tablet (640px - 1024px)
- Two column grid
- Medium spacing
- Full animations
- Side-by-side header

### Desktop (> 1024px)
- Three column grid
- Optimal spacing
- All effects enabled
- Full header layout

---

## ♿ Accessibility

### Keyboard Navigation
- All interactive elements focusable
- Visible focus indicators
- Logical tab order

### Screen Readers
- Semantic HTML
- ARIA labels where needed
- Alt text for icons

### Motion
- Respects `prefers-reduced-motion`
- Can disable animations
- No flashing content

---

## 🎯 Usage Examples

### Basic Card
```jsx
<motion.div
  className="glass-card"
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  whileHover={{ y: -5 }}
>
  Content here
</motion.div>
```

### Button with Icon
```jsx
<Button
  variant="primary"
  icon={<YourIcon />}
  onClick={handleClick}
>
  Click Me
</Button>
```

### Animated List
```jsx
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div key={item.id} variants={itemVariants}>
      {item.content}
    </motion.div>
  ))}
</motion.div>
```

---

**All components are production-ready and fully tested!** 🎉
