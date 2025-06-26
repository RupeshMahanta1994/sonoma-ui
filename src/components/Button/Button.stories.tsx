import type { Meta, StoryObj } from '@storybook/react-vite'
import Button from './Button'

const meta = {
    title: 'Components/Button',
    component: Button,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'outline'],
            description: 'The visual style variant of the button',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The size of the button',
        },
        disabled: {
            control: 'boolean',
            description: 'Whether the button is disabled',
        },
        children: {
            control: 'text',
            description: 'The content of the button',
        },
        onClick: {
            action: 'clicked',
            description: 'Function called when button is clicked',
        },
        type: {
            control: 'select',
            options: ['button', 'submit', 'reset'],
            description: 'The HTML button type',
        },
    },
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
    args: {
        children: 'Button',
    },
}

// Variant stories
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Primary Button',
    },
}

export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'Secondary Button',
    },
}

export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline Button',
    },
}

// Size stories
export const Small: Story = {
    args: {
        size: 'sm',
        children: 'Small Button',
    },
}

export const Medium: Story = {
    args: {
        size: 'md',
        children: 'Medium Button',
    },
}

export const Large: Story = {
    args: {
        size: 'lg',
        children: 'Large Button',
    },
}

// State stories
export const Disabled: Story = {
    args: {
        disabled: true,
        children: 'Disabled Button',
    },
}

export const DisabledPrimary: Story = {
    args: {
        variant: 'primary',
        disabled: true,
        children: 'Disabled Primary',
    },
}

export const DisabledSecondary: Story = {
    args: {
        variant: 'secondary',
        disabled: true,
        children: 'Disabled Secondary',
    },
}

export const DisabledOutline: Story = {
    args: {
        variant: 'outline',
        disabled: true,
        children: 'Disabled Outline',
    },
}

// All variants showcase
export const AllVariants: Story = {
    args: {
        children: 'Sample',
    },
    render: () => (
        <div className="flex gap-4 flex-wrap">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
        </div>
    ),
}

// All sizes showcase
export const AllSizes: Story = {
    args: {
        children: 'Sample',
    },
    render: () => (
        <div className="flex gap-4 items-center">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
        </div>
    ),
}

// Interactive example
export const Interactive: Story = {
    args: {
        children: 'Click me!',
    },
}

// Long text example
export const LongText: Story = {
    args: {
        children: 'This is a button with very long text content',
    },
}

// Icon example (placeholder for when icons are added)
export const WithIcon: Story = {
    args: {
        children: 'With Icon',
    },
    render: () => (
        <div className="flex gap-4">
            <Button>
                <span>🚀</span>
                <span className="ml-2">Launch</span>
            </Button>
            <Button variant="outline">
                <span>📁</span>
                <span className="ml-2">Save</span>
            </Button>
        </div>
    ),
}