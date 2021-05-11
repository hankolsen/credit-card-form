import React from 'react';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';

const CvvInput = () => {
  const { setIsFlipped, cardCvv, setCardCvv } = useCreditCard();
  const onFocus = () => {
    setIsFlipped(true);
  };
  const onBlur = () => {
    setIsFlipped(false);
  };
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 4) {
      event.preventDefault();
      return;
    }
    setCardCvv(value);
  };
  return (
    <div style={{ width: 120 }}>
      <label htmlFor="cvv">CVV</label>
      <input
        id="cvv"
        type="number"
        onFocus={onFocus}
        onBlur={onBlur}
        value={cardCvv}
        onChange={onChange}
      />
    </div>
  );
};

export default CvvInput;
