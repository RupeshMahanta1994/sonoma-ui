# Sonoma UI

A modern React UI component library built with TypeScript and Tailwind CSS.

## Installation

```bash
npm install sonoma-ui
# or
pnpm add sonoma-ui
# or
yarn add sonoma-ui
```

## Usage

```tsx
import { Button } from "sonoma-ui";

function App() {
  return (
    <Button variant="primary" size="md" onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  );
}
```

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
