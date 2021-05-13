import React, { ChangeEvent, useState } from 'react';

import './CreditCardNumberInput.css';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';
import isValidCreditCard from '../isValidCreditCard/isValidCreditCard';

const CreditCardNumberInput = () => {
  const { cardNumber, setCardNumber, cardNumberLength } = useCreditCard();
  const [error, setError] = useState(false);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > cardNumberLength) {
      event.preventDefault();
      return;
    }
    if (value.length === cardNumberLength) {
      setError(!isValidCreditCard(value) ?? false);
    } else {
      setError(false);
    }
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
        maxLength={cardNumberLength}
        value={cardNumber}
        className={error ? 'card__number--error' : ''}
      />
      {error && <p className="card__number-error-message">That seems wrong</p>}
    </>
  );
};

export default CreditCardNumberInput;
