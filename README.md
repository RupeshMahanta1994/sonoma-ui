# Sonoma UI

A modern React UI component library built with TypeScript and Tailwind CSS with tree-# Disabled button
<Button disabled>Disabled Button</Button>

````

### Card

A flexible card component for displaying content with different variants.

#### Props

- `variant`: `'default' | 'outlined' | 'elevated'` (default: `'default'`)
- `padding`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `className`: `string` (optional)
- `children`: `React.ReactNode`

#### Examples

```tsx
// Default card
<Card>
  <h3>Card Title</h3>
  <p>Card content goes here.</p>
</Card>

// Outlined card
<Card variant="outlined">
  <h3>Outlined Card</h3>
  <p>This card has a border.</p>
</Card>

// Elevated card
<Card variant="elevated">
  <h3>Elevated Card</h3>
  <p>This card has a shadow.</p>
</Card>

// Different padding sizes
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>

// Custom styling
<Card className="bg-blue-50" variant="outlined">
  <p>Custom styled card</p>
</Card>
```kable selective imports.

## Installation

```bash
npm install sonoma-ui
# or
pnpm add sonoma-ui
# or
yarn add sonoma-ui
````

## Usage

### 🌳 Tree-Shakable Selective Imports (Recommended)

Import only the components you need for smaller bundle sizes:

```tsx
// Import only Button - ~1.0KB
import { Button } from "sonoma-ui/button";
import type { ButtonProps } from "sonoma-ui/button";

// Import only Card - ~0.7KB
import { Card } from "sonoma-ui/card";
import type { CardProps } from "sonoma-ui/card";

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <h2>My Card</h2>
      <Button variant="primary" onClick={() => console.log("Clicked!")}>
        Click me
      </Button>
    </Card>
  );
}
```

### 📦 Full Library Import (Also Supported)

Import all components from the main entry:

```tsx
import { Button, Card } from "sonoma-ui";
import type { ButtonProps, CardProps } from "sonoma-ui";

function App() {
  return (
    <Card variant="outlined">
      <Button variant="secondary">Action</Button>
    </Card>
  );
}
```

## Bundle Size Comparison

| Import Method                               | Bundle Size | Components Included |
| ------------------------------------------- | ----------- | ------------------- |
| `import { Button } from 'sonoma-ui/button'` | ~1.0KB      | Button only         |
| `import { Card } from 'sonoma-ui/card'`     | ~0.7KB      | Card only           |
| `import { Button, Card } from 'sonoma-ui'`  | ~1.7KB      | Both components     |

## Components

### Button

A versatile button component with multiple variants and sizes.

#### Props

- `variant`: `'primary' | 'secondary' | 'outline'` (default: `'primary'`)
- `size`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `disabled`: `boolean` (default: `false`)
- `onClick`: `() => void`
- `type`: `'button' | 'submit' | 'reset'` (default: `'button'`)
- `children`: `React.ReactNode`

#### Examples

```tsx
// Primary button
<Button variant="primary">Primary Button</Button>

// Secondary button
<Button variant="secondary">Secondary Button</Button>

// Outline button
<Button variant="outline">Outline Button</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled button
<Button disabled>Disabled Button</Button>
```

## Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Run tests
pnpm test

# Run Storybook
pnpm storybook

# Build library
pnpm build:lib

# Build for production
pnpm build
```

## License

MIT
