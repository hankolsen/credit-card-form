import React, { ChangeEvent, useState } from 'react';

import './CreditCardNumberInput.css';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';
import validateCreditCard from '../validatedCreditCard/validateCreditCard';

const CreditCardNumberInput = () => {
  const { setCardNumber } = useCreditCard();
  const [error, setError] = useState(false);
  const [numbers, setNumbers] = useState<string>('');
  const wantedLength = 16;
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 16) {
      event.preventDefault();
      return;
    }
    if (value.length > 4) {
      setNumbers(`${value.slice(0, 3)} ${value.slice(4)}`);
    }
    if (value.length === wantedLength) {
      setError(!validateCreditCard(value) ?? false);
    } else {
      setError(false);
    }
    setNumbers(value);
    setCardNumber(value);
  };

  return (
    <>
      <label htmlFor="cardNumber">Card Number</label>
      <input
        name="cardNumber"
        id="cardNumber"
        type="number"
        onChange={handleInputChange}
        maxLength={16}
        value={numbers}
        className={error ? 'card__number--error' : ''}
      />
      {error && <p className="card__number-error-message">That seems wrong</p>}
    </>
  );
};

export default CreditCardNumberInput;
