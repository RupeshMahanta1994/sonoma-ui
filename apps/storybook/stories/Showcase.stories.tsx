import type { Meta, StoryObj } from '@storybook/react-vite'
import { Button } from '@sonoma-ui/button'
import { Card } from '@sonoma-ui/card'

const meta = {
    title: 'Examples/Component Showcase',
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta

export default meta
type Story = StoryObj<typeof meta>

export const CombinedComponents: Story = {
    render: () => (
        <div className="flex gap-6 flex-wrap max-w-4xl">
            <Card variant="default" padding="lg" className="max-w-sm">
                <h3 className="text-xl font-bold mb-2">@sonoma-ui/card</h3>
                <p className="text-gray-600 mb-4">
                    A flexible card component with multiple variants and padding options.
                </p>
                <div className="flex gap-2">
                    <Button size="sm" variant="primary">Primary</Button>
                    <Button size="sm" variant="outline">Outline</Button>
                </div>
            </Card>

            <Card variant="outlined" padding="lg" className="max-w-sm">
                <h3 className="text-xl font-bold mb-2">@sonoma-ui/button</h3>
                <p className="text-gray-600 mb-4">
                    A versatile button component with different variants and sizes.
                </p>
                <div className="flex flex-col gap-2">
                    <Button variant="primary">Primary Button</Button>
                    <Button variant="secondary">Secondary Button</Button>
                    <Button variant="outline">Outline Button</Button>
                </div>
            </Card>

            <Card variant="elevated" padding="lg" className="max-w-sm">
                <h3 className="text-xl font-bold mb-2">Monorepo Benefits</h3>
                <p className="text-gray-600 mb-4">
                    Install only what you need:
                </p>
                <div className="bg-gray-100 p-3 rounded text-sm font-mono mb-4">
                    npm install @sonoma-ui/button<br />
                    npm install @sonoma-ui/card
                </div>
                <Button variant="primary" size="lg">Get Started</Button>
            </Card>
        </div>
    ),
}

export const UsageExample: Story = {
    render: () => (
        <Card variant="outlined" padding="lg" className="max-w-md">
            <div className="text-center">
                <h2 className="text-2xl font-bold mb-4">Welcome to Sonoma UI</h2>
                <p className="text-gray-600 mb-6">
                    A modern React component library with individual packages for optimal bundle sizes.
                </p>
                <div className="flex gap-3 justify-center">
                    <Button variant="primary">
                        Get Started
                    </Button>
                    <Button variant="outline">
                        Learn More
                    </Button>
                </div>
            </div>
        </Card>
    ),
}
