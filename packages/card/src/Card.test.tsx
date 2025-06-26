import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import { Card } from './index'

describe('Card', () => {
    it('renders children correctly', () => {
        render(<Card>Test content</Card>)
        expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('renders as a div element', () => {
        render(<Card data-testid="card">Default card</Card>)
        const card = screen.getByTestId('card')
        expect(card).toBeInTheDocument()
        expect(card.tagName).toBe('DIV')
    })

    it('applies custom className', () => {
        render(<Card className="custom-class" data-testid="card">Custom card</Card>)
        const card = screen.getByTestId('card')
        expect(card).toHaveClass('custom-class')
    })

    it('passes through additional props', () => {
        render(<Card data-testid="custom-card">Card with props</Card>)
        const card = screen.getByTestId('custom-card')
        expect(card).toBeInTheDocument()
    })

    it('renders complex JSX children', () => {
        render(
            <Card>
                <h2>Title</h2>
                <p>Description</p>
                <button>Action</button>
            </Card>
        )

        expect(screen.getByText('Title')).toBeInTheDocument()
        expect(screen.getByText('Description')).toBeInTheDocument()
        expect(screen.getByText('Action')).toBeInTheDocument()
    })

    it('renders with different variants', () => {
        const { rerender } = render(<Card variant="default" data-testid="card">Default</Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()

        rerender(<Card variant="outlined" data-testid="card">Outlined</Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()

        rerender(<Card variant="elevated" data-testid="card">Elevated</Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()
    })

    it('renders with different padding sizes', () => {
        const { rerender } = render(<Card padding="sm" data-testid="card">Small</Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()

        rerender(<Card padding="md" data-testid="card">Medium</Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()

        rerender(<Card padding="lg" data-testid="card">Large</Card>)
        expect(screen.getByTestId('card')).toBeInTheDocument()
    })
})
