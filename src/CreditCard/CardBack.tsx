import React from 'react';
import { useCreditCard } from '../CreditCardContext/CreditCardContext';
import CardExpiration from './CardExpiration';

const CardBack = () => {
  const { cardCvv, cardName, formattedCardNumber } = useCreditCard();

  return (
    <div className="card__face card__back">
      <div className="card__strips-wrapper">
        <div className="card__magnetic-strip" />
        <div className="card__signature-strip">
          <div className="card__cvv">{cardCvv}</div>
        </div>
      </div>
      <div className="card__content">
        <div className="card__number">{formattedCardNumber}</div>
        <div className="card__name-expiration-wrapper">
          <div className="card__name">{cardName}</div>
          <CardExpiration />
        </div>
      </div>
    </div>
  );
};

export default CardBack;
