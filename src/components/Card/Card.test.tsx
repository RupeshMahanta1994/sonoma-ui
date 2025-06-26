import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import Card from './Card'

describe('Card', () => {
    it('renders children correctly', () => {
        render(<Card>Test content</Card>)
        expect(screen.getByText('Test content')).toBeInTheDocument()
    })

    it('applies default variant and padding', () => {
        render(<Card>Default card</Card>)
        const card = screen.getByText('Default card').parentElement
        expect(card).toHaveClass('bg-white', 'border', 'border-gray-200', 'p-4')
    })

    it('applies outlined variant styles', () => {
        render(<Card variant="outlined">Outlined card</Card>)
        const card = screen.getByText('Outlined card').parentElement
        expect(card).toHaveClass('bg-white', 'border-2', 'border-gray-300')
    })

    it('applies elevated variant styles', () => {
        render(<Card variant="elevated">Elevated card</Card>)
        const card = screen.getByText('Elevated card').parentElement
        expect(card).toHaveClass('bg-white', 'shadow-lg', 'border', 'border-gray-100')
    })

    it('applies correct padding classes', () => {
        const { rerender } = render(<Card padding="sm">Small padding</Card>)
        let card = screen.getByText('Small padding').parentElement
        expect(card).toHaveClass('p-3')

        rerender(<Card padding="md">Medium padding</Card>)
        card = screen.getByText('Medium padding').parentElement
        expect(card).toHaveClass('p-4')

        rerender(<Card padding="lg">Large padding</Card>)
        card = screen.getByText('Large padding').parentElement
        expect(card).toHaveClass('p-6')
    })

    it('applies custom className', () => {
        render(<Card className="custom-class">Custom card</Card>)
        const card = screen.getByText('Custom card').parentElement
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
})
