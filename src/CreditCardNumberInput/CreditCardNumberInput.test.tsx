import React from 'react';
import { render, screen } from '@testing-library/react';
import CreditCardNumberInput from './CreditCardNumberInput';

describe('CreditCardNumberInput test', () => {
  it('should render the CreditCardNumberInput', () => {
    const { container } = render(<CreditCardNumberInput />);
    expect(screen.getByText(/card number/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
