# @sonoma-ui/button

A versatile button component from Sonoma UI component library.

## Installation

```bash
npm install @sonoma-ui/button
# or
pnpm add @sonoma-ui/button
# or
yarn add @sonoma-ui/button
```

## Usage

```tsx
import { Button } from "@sonoma-ui/button";
import type { ButtonProps } from "@sonoma-ui/button";

function App() {
  return (
    <Button variant="primary" onClick={() => console.log("Clicked!")}>
      Click me
    </Button>
  );
}
```

## Props

| Prop       | Type                                    | Default     | Description                    |
| ---------- | --------------------------------------- | ----------- | ------------------------------ |
| `variant`  | `'primary' \| 'secondary' \| 'outline'` | `'primary'` | The visual style variant       |
| `size`     | `'sm' \| 'md' \| 'lg'`                  | `'md'`      | The size of the button         |
| `disabled` | `boolean`                               | `false`     | Whether the button is disabled |
| `onClick`  | `() => void`                            | -           | Function called when clicked   |
| `type`     | `'button' \| 'submit' \| 'reset'`       | `'button'`  | HTML button type               |
| `children` | `React.ReactNode`                       | -           | The content of the button      |

## Examples

```tsx
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

// With click handler
<Button onClick={() => alert('Clicked!')}>
  Click me
</Button>
```

## Bundle Size

~1.0KB (gzipped)

## Peer Dependencies

- React >=18.0.0
- React DOM >=18.0.0

## License

MIT
