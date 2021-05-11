import React from 'react';
import { render, screen } from '@testing-library/react';
import { CreditCardContextProvider } from 'CreditCardContext/CreditCardContext';
import CreditCardNumberInput from './CreditCardNumberInput';

describe('CreditCardNumberInput test', () => {
  it('should render the CreditCardNumberInput', () => {
    const { container } = render(
      <CreditCardContextProvider>
        <CreditCardNumberInput />
      </CreditCardContextProvider>,
    );
    expect(screen.getByText(/card number/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
