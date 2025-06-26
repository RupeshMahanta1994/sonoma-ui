import '@testing-library/jest-dom'
import { vi } from 'vitest'

// Mock IntersectionObserver if needed for components
globalThis.IntersectionObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock ResizeObserver if needed for components
globalThis.ResizeObserver = vi.fn().mockImplementation(() => ({
  observe: vi.fn(),
  unobserve: vi.fn(),
  disconnect: vi.fn(),
}))

// Mock matchMedia for responsive components
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(), // deprecated
    removeListener: vi.fn(), // deprecated
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
})

// Mock scrollTo for components that use scrolling
Object.defineProperty(window, 'scrollTo', {
  writable: true,
  value: vi.fn(),
})

// Setup for CSS modules and asset imports
vi.mock('*.css', () => ({}))
vi.mock('*.scss', () => ({}))
vi.mock('*.sass', () => ({}))
vi.mock('*.svg', () => 'svg-mock')
vi.mock('*.png', () => 'png-mock')
vi.mock('*.jpg', () => 'jpg-mock')
vi.mock('*.jpeg', () => 'jpeg-mock')
vi.mock('*.gif', () => 'gif-mock')
vi.mock('*.webp', () => 'webp-mock')