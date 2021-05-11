import React from 'react';

import './CreditCardNameInput.css';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';

const CreditCardNameInput = () => {
  const { cardName, setCardName } = useCreditCard();
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setCardName(value.toUpperCase());
  };

  return (
    <>
      <label htmlFor="cardName">Card Name</label>
      <input
        type="text"
        name="cardName"
        id="cardName"
        value={cardName}
        onChange={onChange}
      />
    </>
  );
};

export default CreditCardNameInput;
