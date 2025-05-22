import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import InsertStock from './InsertStock';

describe('InsertStock Page', () => {
  test('renders form elements correctly', () => {
    render(
      <BrowserRouter>
        <InsertStock />
      </BrowserRouter>
    );

    // Check for the heading
    expect(screen.getByText(/Insert New Stock Item/i)).toBeInTheDocument();

    // Check for form fields by their labels
    expect(screen.getByLabelText(/Item Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Quantity/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Price/i)).toBeInTheDocument();

    // Check for the submit button by its text
    expect(screen.getByRole('button', { name: /Insert Item/i })).toBeInTheDocument();
  });
});
