import type { Meta, StoryObj } from '@storybook/react-vite'
import { Card } from './index'

const meta = {
    title: '@sonoma-ui/card/Card',
    component: Card,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['default', 'outlined', 'elevated'],
            description: 'The visual style variant of the card',
        },
        padding: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
            description: 'The padding size of the card',
        },
        children: {
            control: 'text',
            description: 'The content of the card',
        },
    },
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
    args: {
        children: 'This is a default card with some content.',
    },
}

// Variant stories
export const Outlined: Story = {
    args: {
        variant: 'outlined',
        children: 'This is an outlined card with a thicker border.',
    },
}

export const Elevated: Story = {
    args: {
        variant: 'elevated',
        children: 'This is an elevated card with a shadow effect.',
    },
}

// Padding stories
export const SmallPadding: Story = {
    args: {
        padding: 'sm',
        children: 'Card with small padding.',
    },
}

export const LargePadding: Story = {
    args: {
        padding: 'lg',
        variant: 'elevated',
        children: 'Card with large padding and elevated style.',
    },
}

// Complex content example
export const WithCustomContent: Story = {
    args: {
        variant: 'outlined',
        padding: 'lg',
        children: (
            <div>
                <h3 className="text-xl font-bold mb-2">Card Title</h3>
                <p className="text-gray-600 mb-4">
                    This card contains custom JSX content with multiple elements including a title, description, and button.
                </p>
                <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
                    Action Button
                </button>
            </div>
        ),
    },
}

// All variants showcase
export const AllVariants: Story = {
    args: {
        children: 'Sample content',
    },
    render: () => (
        <div className="flex gap-4 flex-wrap">
            <Card variant="default" padding="md">Default Card</Card>
            <Card variant="outlined" padding="md">Outlined Card</Card>
            <Card variant="elevated" padding="md">Elevated Card</Card>
        </div>
    ),
}

// All padding sizes showcase
export const AllPaddings: Story = {
    args: {
        children: 'Sample content',
    },
    render: () => (
        <div className="flex gap-4 items-start">
            <Card variant="outlined" padding="sm">Small Padding</Card>
            <Card variant="outlined" padding="md">Medium Padding</Card>
            <Card variant="outlined" padding="lg">Large Padding</Card>
        </div>
    ),
}
