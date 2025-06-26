# Sonoma UI Monorepo

A modern React UI component library with individual packages for optimal bundle sizes and selective imports.

## 🎯 **Individual Component Packages**

Install only the components you need:

```bash
# Install Button component only (~1.0KB)
npm install @sonoma-ui/button

# Install Card component only (~0.7KB)
npm install @sonoma-ui/card

# Or install both if needed
npm install @sonoma-ui/button @sonoma-ui/card
```

## 📦 **Available Packages**

| Package                                  | Bundle Size | Description                                          |
| ---------------------------------------- | ----------- | ---------------------------------------------------- |
| [`@sonoma-ui/button`](./packages/button) | ~1.0KB      | A versatile button component with variants and sizes |
| [`@sonoma-ui/card`](./packages/card)     | ~0.7KB      | A flexible card component for displaying content     |

## 🚀 **Quick Start**

### Using Individual Packages

```tsx
// Install specific components
import { Button } from "@sonoma-ui/button";
import { Card } from "@sonoma-ui/card";
import type { ButtonProps, CardProps } from "@sonoma-ui/button";

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <h2>Welcome to Sonoma UI</h2>
      <p>Ultra-lightweight component packages</p>
      <Button variant="primary" onClick={() => console.log("Clicked!")}>
        Get Started
      </Button>
    </Card>
  );
}
```

### Component Examples

#### Button Component

```tsx
import { Button } from '@sonoma-ui/button'

// Different variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>

// Different sizes
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// Disabled state
<Button disabled>Disabled</Button>
```

#### Card Component

```tsx
import { Card } from '@sonoma-ui/card'

// Different variants
<Card variant="default">Default Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="elevated">Elevated Card</Card>

// Different padding
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>

// Custom styling
<Card className="bg-blue-50" variant="outlined">
  Custom styled card
</Card>
```

## 🎨 **Storybook**

Explore all components interactively:

```bash
pnpm storybook
```

## 🛠️ **Development**

### Prerequisites

- Node.js 18+
- pnpm 8+

### Getting Started

```bash
# Clone the repository
git clone https://github.com/yourusername/sonoma-ui.git
cd sonoma-ui

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run tests
pnpm test

# Start Storybook
pnpm storybook
```

### Workspace Commands

```bash
# Build all packages
pnpm build

# Test all packages
pnpm test

# Lint all packages
pnpm lint

# Run Storybook
pnpm storybook

# Publish all packages (requires setup)
pnpm publish:all
```

### Working with Individual Packages

```bash
# Work on Button package
cd packages/button
pnpm build
pnpm test
pnpm dev  # Watch mode

# Work on Card package
cd packages/card
pnpm build
pnpm test
pnpm dev  # Watch mode
```

## 📁 **Project Structure**

```
sonoma-ui/
├── packages/
│   ├── button/           # @sonoma-ui/button
│   │   ├── src/
│   │   ├── dist/
│   │   ├── package.json
│   │   └── README.md
│   └── card/             # @sonoma-ui/card
│       ├── src/
│       ├── dist/
│       ├── package.json
│       └── README.md
├── apps/
│   └── storybook/        # Documentation & examples
├── package.json          # Workspace root
├── pnpm-workspace.yaml   # Workspace config
└── README.md
```

## 🔄 **Publishing**

This project uses [Changesets](https://github.com/changesets/changesets) for version management:

```bash
# Create a changeset
pnpm changeset

# Version packages
pnpm changeset:version

# Publish to npm
pnpm changeset:publish
```

## ✨ **Benefits of This Approach**

### 🌳 **Tree-Shakable & Ultra-Lightweight**

- Install only what you need
- Each component is ~0.5-1KB
- No unused code in your bundle

### 📦 **Independent Versioning**

- Components can be updated independently
- Semantic versioning per package
- No breaking changes across unrelated components

### 🚀 **Better Developer Experience**

- Clear package boundaries
- Focused documentation per component
- Easier maintenance and testing

### 💪 **Future-Proof**

- Easy to add new components as separate packages
- Can deprecate individual components without affecting others
- Clear upgrade paths

## 🔗 **Links**

- [Storybook Documentation](https://your-storybook-url.com)
- [npm: @sonoma-ui/button](https://www.npmjs.com/package/@sonoma-ui/button)
- [npm: @sonoma-ui/card](https://www.npmjs.com/package/@sonoma-ui/card)

## 📄 **License**

MIT - see [LICENSE](./LICENSE) file for details.
