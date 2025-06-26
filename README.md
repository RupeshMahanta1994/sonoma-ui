# Sonoma UI

A modern React UI component library built with TypeScript and Tailwind CSS. Each component is independently packaged and tree-shakable for optimal bundle sizes.

## 🏗️ Monorepo Structure

This project uses a monorepo architecture with independent packages for each component:

- **sonoma-ui-button** - Button component (~0.97 kB)
- **sonoma-ui-card** - Card component (~0.58 kB)
- **apps/storybook** - Component documentation and playground

## Installation

Install individual components as needed:

```bash
# Install specific components
pnpm add sonoma-ui-button sonoma-ui-card

# Or using npm
npm install sonoma-ui-button sonoma-ui-card

# Or using yarn
yarn add sonoma-ui-button sonoma-ui-card
```

## Usage

### 🌳 Per-Component Imports (Recommended)

Import only the components you need for optimal bundle sizes:

```tsx
// Import Button component - ~0.97 kB
import { Button } from "sonoma-ui-button";
import type { ButtonProps } from "sonoma-ui-button";

// Import Card component - ~0.58 kB
import { Card } from "sonoma-ui-card";
import type { CardProps } from "sonoma-ui-card";

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

## Bundle Size Comparison

| Package            | Bundle Size | Description                |
| ------------------ | ----------- | -------------------------- |
| `sonoma-ui-button` | ~0.97 kB    | Button component only      |
| `sonoma-ui-card`   | ~0.58 kB    | Card component only        |
| Both components    | ~1.55 kB    | When using both components |

## Components

### sonoma-ui-button

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
import { Button } from "sonoma-ui-button";

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

### sonoma-ui-card

A flexible card component for displaying content with different variants.

#### Props

- `variant`: `'default' | 'outlined' | 'elevated'` (default: `'default'`)
- `padding`: `'sm' | 'md' | 'lg'` (default: `'md'`)
- `className`: `string` (optional)
- `children`: `React.ReactNode`

#### Examples

```tsx
import { Card } from "sonoma-ui-card";

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
```

## Development

This workspace uses pnpm workspaces for managing the monorepo.

```bash
# Install dependencies for all packages
pnpm install

# Build all packages
pnpm build

# Test all packages
pnpm test

# Run Storybook for component documentation
pnpm storybook

# Build a specific package
cd packages/button && pnpm build
cd packages/card && pnpm build

# Test a specific package
cd packages/button && pnpm test
cd packages/card && pnpm test
```

### Adding New Components

1. Create a new package in `packages/your-component`
2. Follow the structure of existing components (Button, Card)
3. Add the package to the workspace in `pnpm-workspace.yaml`
4. Create stories in the Storybook app

## Publishing

Each package can be published independently:

```bash
# Publish a specific package
cd packages/button && pnpm publish
cd packages/card && pnpm publish
```

## License

MIT
