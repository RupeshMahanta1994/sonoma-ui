# @sonoma-ui/card

A flexible card component from Sonoma UI component library.

## Installation

```bash
npm install @sonoma-ui/card
# or
pnpm add @sonoma-ui/card
# or
yarn add @sonoma-ui/card
```

## Usage

```tsx
import { Card } from "@sonoma-ui/card";
import type { CardProps } from "@sonoma-ui/card";

function App() {
  return (
    <Card variant="elevated" padding="lg">
      <h2>My Card</h2>
      <p>This is some card content.</p>
    </Card>
  );
}
```

## Props

| Prop        | Type                                    | Default     | Description              |
| ----------- | --------------------------------------- | ----------- | ------------------------ |
| `variant`   | `'default' \| 'outlined' \| 'elevated'` | `'default'` | The visual style variant |
| `padding`   | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | The padding size         |
| `className` | `string`                                | -           | Additional CSS classes   |
| `children`  | `React.ReactNode`                       | -           | The content of the card  |

## Examples

```tsx
// Different variants
<Card variant="default">Default Card</Card>
<Card variant="outlined">Outlined Card</Card>
<Card variant="elevated">Elevated Card</Card>

// Different padding sizes
<Card padding="sm">Small padding</Card>
<Card padding="md">Medium padding</Card>
<Card padding="lg">Large padding</Card>

// Custom styling
<Card className="bg-blue-50" variant="outlined">
  Custom styled card
</Card>

// Complex content
<Card variant="elevated" padding="lg">
  <h3>Card Title</h3>
  <p>Card description goes here.</p>
  <button>Action</button>
</Card>
```

## Bundle Size

~0.7KB (gzipped)

## Peer Dependencies

- React >=18.0.0
- React DOM >=18.0.0

## License

MIT
