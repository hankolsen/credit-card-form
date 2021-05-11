import React from 'react';

import './CreditCard.css';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';

const CreditCard = () => {
  const {
    isFlipped,
    cardNumber,
    cardName,
    cardCvv,
    expirationMonth,
    expirationYear,
  } = useCreditCard();
  let flipClass;
  if (isFlipped !== undefined) {
    flipClass = isFlipped ? 'card--flipped' : 'card--flopped';
  }

  return (
    <div className="card__wrapper">
      <div className={`card ${flipClass}`}>
        <div className="card__face card__front">
          <div className="card__content">
            <div className="card__number">
              {cardNumber || '#### #### #### ####'}
            </div>
            <div className="card__name-expiration-wrapper">
              <div className="card__name">{cardName}</div>
              <div className="card__expiration-wrapper">
                <div className="card__expiration-month">
                  {expirationMonth.padStart(2, '0')}
                </div>
                <span>/</span>
                <div className="card__expiration-year">
                  {expirationYear.substring(2)}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card__face card__back">
          <div className="card__content">
            <div className="card__cvv">{cardCvv}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
