// import { describe, it, expect } from 'vitest'
 import { render, screen } from '@testing-library/react'
 import RandomTest from './RandomTest'

describe('Random Component', () => {
  it('renders correctly', () => {
    render(<RandomTest/>)
    screen.debug() // Logs the DclearOM structure
    const element = screen.getByText('Random Component')
    expect(element).toBeInTheDocument()
  })
})