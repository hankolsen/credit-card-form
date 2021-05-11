import React, { ChangeEvent, useState } from 'react';

import './CreditCardNumberInput.css';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';

const CreditCardNumberInput = () => {
  const { setCardNumber } = useCreditCard();
  const [numbers, setNumbers] = useState<string>('');
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 16) {
      event.preventDefault();
      return;
    }
    if (value.length > 4) {
      setNumbers(`${value.slice(0, 3)} ${value.slice(4)}`);
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
      />
    </>
  );
};

export default CreditCardNumberInput;
