import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const textElement = screen.getByText(/hello/i)
  expect(textElement).toBeInTheDocument();
})

test('Greet renders with a name', () => {
  render(<Greet name="Vishwas" />)
  const textElement = screen.getByText(/hello vishwas/i)
  expect(textElement).toBeInTheDocument();
})