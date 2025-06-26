import React from 'react'

export interface CardProps {
    variant?: 'default' | 'outlined' | 'elevated'
    padding?: 'sm' | 'md' | 'lg'
    children: React.ReactNode
    className?: string
}

const Card: React.FC<CardProps> = ({
    variant = 'default',
    padding = 'md',
    children,
    className = '',
    ...props
}) => {
    const baseClasses = 'rounded-lg'

    const variantClasses = {
        default: 'bg-white border border-gray-200',
        outlined: 'bg-white border-2 border-gray-300',
        elevated: 'bg-white shadow-lg border border-gray-100'
    }

    const paddingClasses = {
        sm: 'p-3',
        md: 'p-4',
        lg: 'p-6'
    }

    const className_final = `${baseClasses} ${variantClasses[variant]} ${paddingClasses[padding]} ${className}`.trim()

    return (
        <div
            className={className_final}
            {...props}
        >
            {children}
        </div>
    )
}

export default Card
