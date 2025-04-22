import { test, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import React from 'react';

function MyComponent() {
  return <h1>Hello World</h1>;
}

test('renders heading', () => {
  render(<MyComponent />);
  expect(screen.getByText('Hello World')).toBeInTheDocument();
});