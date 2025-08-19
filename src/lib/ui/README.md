# 🔮 Cyberpunk UI Design System

A future-proof, scalable component library built for cyberpunk-themed applications. Built with React, TypeScript, and TailwindCSS.

## ✨ Features

- 🎨 **10 Color Schemes** - Cyan, Purple, Pink, Green, Yellow, Blue, Red, Orange, Lime, Teal
- 🔧 **Multiple Variants** - Primary, Secondary, Ghost, Outline, Danger, Warning, Success
- 📐 **5 Sizes** - XS, SM, MD, LG, XL
- 🎭 **Clip Path Styling** - Angled corners, cuts, and custom shapes
- ⚡ **Visual Effects** - Scanning lines, glow effects, corner decorations
- 🪄 **Neural Theming** - Cyberpunk-specific styling options
- ♿ **Accessible** - Built with accessibility in mind
- 🔍 **TypeScript** - Fully typed components and props
- 📱 **Responsive** - Mobile-first design approach

## 🚀 Quick Start

```tsx
import { CyberpunkButton, CyberpunkInput, CyberpunkCard } from '@/lib/ui';

function App() {
  return (
    <CyberpunkCard 
      colorScheme="cyan" 
      clipPath="angled-corner" 
      hoverable 
      scanningEffect
    >
      <CyberpunkInput
        neuralLabel="NEURAL_ID"
        placeholder="Enter your neural identifier..."
        colorScheme="cyan"
      />
      
      <CyberpunkButton
        variant="primary"
        colorScheme="cyan"
        neuralText
        scanningEffect
      >
        INITIATE_TRANSMISSION
      </CyberpunkButton>
    </CyberpunkCard>
  );
}
```

## 📦 Components

### CyberpunkButton

```tsx
<CyberpunkButton
  variant="primary"           // primary | secondary | ghost | outline | danger | warning | success
  colorScheme="cyan"          // cyan | purple | pink | green | yellow | blue | red | orange | lime | teal
  size="md"                   // xs | sm | md | lg | xl
  clipPath="angled-corner"    // straight | bottom-right-cut | top-left-cut | angled-corner | double-cut | hex-corner
  glowEffect={true}
  scanningEffect={true}
  neuralText={true}
  leftIcon={<Icon />}
  rightIcon={<Icon />}
  fullWidth={false}
  loading={false}
  disabled={false}
>
  NEURAL_LINK
</CyberpunkButton>
```

### CyberpunkInput & CyberpunkTextArea

```tsx
<CyberpunkInput
  type="email"
  neuralLabel="NEURAL_LINK_ADDRESS"
  placeholder="neural.link@cybernet.void"
  colorScheme="cyan"
  scanningEffect={true}
  glowEffect={true}
  error="INVALID_NEURAL_PROTOCOL"
  hint="All transmissions are quantum encrypted"
  required
/>

<CyberpunkTextArea
  neuralLabel="DATA_PAYLOAD"
  placeholder="Initiate neural data exchange protocols..."
  rows={6}
  resize="vertical"
  colorScheme="cyan"
/>
```

### CyberpunkCard

```tsx
<CyberpunkCard
  variant="primary"
  colorScheme="cyan"
  clipPath="angled-corner"
  withAccent={true}
  hoverable={true}
  scanningEffect={true}
  glowEffect={true}
  title="Neural Interface"
  subtitle="Quantum encrypted v2.7.4"
  header={<CustomHeader />}
  footer={<CustomFooter />}
  onClick={handleClick}
>
  Card content here...
</CyberpunkCard>
```

### CyberpunkBadge

```tsx
<CyberpunkBadge
  variant="primary"
  colorScheme="green"
  status="active"           // active | processing | default | error | warning | success
  clipPath="angled-corner"
  glowEffect={true}
  dot={true}                // Show status dot
  count={5}                 // Show count badge
>
  NEURAL_ACTIVE
</CyberpunkBadge>
```

## 🎨 Visual Effects

### ScanningEffect

```tsx
import { ScanningEffect } from '@/lib/ui';

<div className="relative">
  <ScanningEffect
    color="cyan"
    duration={2000}
    direction="vertical"
    opacity={0.6}
    active={true}
  />
  Your content here
</div>
```

### CornerDecorations

```tsx
import { CornerDecorations } from '@/lib/ui';

<div className="relative">
  <CornerDecorations
    color="cyan"
    size="md"
    opacity={0.6}
    style="square"
  />
  Your content here
</div>
```

### useCyberpunkEffect Hook

```tsx
import { useCyberpunkEffect } from '@/lib/ui';

function MyComponent() {
  const {
    isActive,
    isHovered,
    progress,
    handleMouseEnter,
    handleMouseLeave,
    getScanningStyles,
    getGlowStyles,
  } = useCyberpunkEffect({
    scanningEnabled: true,
    glowEnabled: true,
    hoverEffects: true,
    duration: 2000,
    direction: 'vertical',
  });

  return (
    <div
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={getGlowStyles()}
    >
      <div style={getScanningStyles()} />
      Content with cyberpunk effects
    </div>
  );
}
```

## 🎯 Color Schemes

All components support these color schemes:

- `cyan` - Cyberpunk blue-green
- `purple` - Neural purple
- `pink` - Neon pink
- `green` - Matrix green
- `yellow` - Warning yellow
- `blue` - Electric blue
- `red` - Alert red
- `orange` - Data orange
- `lime` - Toxic lime
- `teal` - Corporate teal

## ⚙️ Customization

### TailwindCSS Integration

The design system is built on TailwindCSS. Make sure you have the required colors configured:

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        gray: {
          800: '#1f2937',
          900: '#111827',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
    },
  },
}
```

### CSS Variables

Components use CSS variables for dynamic styling:

```css
.cyberpunk-component {
  --scan-progress: 0%;
  --glow-intensity: 1;
  --effect-duration: 2000ms;
  --effect-direction: vertical;
}
```

## 🔧 Advanced Usage

### Combining Effects

```tsx
<CyberpunkCard
  colorScheme="cyan"
  scanningEffect
  glowEffect
  withAccent
  hoverable
  clipPath="angled-corner"
>
  <ScanningEffect color="cyan" />
  <CornerDecorations color="cyan" size="lg" />
  
  <CyberpunkInput
    neuralLabel="NEURAL_INTERFACE"
    scanningEffect
    glowEffect
  />
  
  <CyberpunkButton
    variant="primary"
    neuralText
    scanningEffect
  >
    [EXECUTE_PROTOCOL]
  </CyberpunkButton>
</CyberpunkCard>
```

### Custom Animations

```tsx
const CustomComponent = () => {
  const effects = useCyberpunkEffect({
    autoPlay: true,
    duration: 3000,
    intensity: 1.5,
  });

  return (
    <div 
      className="relative"
      {...effects.handleMouseEnter}
      {...effects.handleMouseLeave}
    >
      {effects.isActive && (
        <div style={effects.getScanningStyles()} />
      )}
    </div>
  );
};
```

## 📐 Responsive Design

All components are mobile-first and responsive:

```tsx
<CyberpunkButton
  size="sm"              // Mobile: small
  className="md:text-base lg:text-lg"  // Larger on desktop
  fullWidth              // Full width on mobile
>
  Responsive Button
</CyberpunkButton>
```

## 🔍 TypeScript Support

Fully typed with comprehensive interfaces:

```tsx
import type {
  CyberpunkButtonProps,
  CyberpunkColorScheme,
  ClipPathVariant,
} from '@/lib/ui';

const colorScheme: CyberpunkColorScheme = 'cyan';
const clipPath: ClipPathVariant = 'angled-corner';
```

## 🎪 Storybook

View all components in Storybook with interactive controls and documentation.

```bash
npm run storybook
```

## 🚧 Migration Guide

### From Existing Components

Replace your existing components:

```tsx
// Before
<button className="bg-cyan-400 text-gray-900">Click Me</button>

// After
<CyberpunkButton colorScheme="cyan">Click Me</CyberpunkButton>
```

### Gradual Adoption

You can adopt components gradually:

```tsx
// Start with one component
import { CyberpunkButton } from '@/lib/ui';

// Add more as needed
import { 
  CyberpunkButton, 
  CyberpunkInput,
  CyberpunkCard 
} from '@/lib/ui';
```

## 🤝 Contributing

1. Follow the established patterns
2. Add TypeScript types
3. Include Storybook stories
4. Test across all variants
5. Update documentation

## 📄 License

MIT License - Built with ❤️ for the cyberpunk community.

---

*Neural interface established. Welcome to the future of UI components.*
