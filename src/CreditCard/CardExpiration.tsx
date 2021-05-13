import React from 'react';
import { useCreditCard } from '../CreditCardContext/CreditCardContext';

const CardExpiration = () => {
  const { expirationMontOutput, expirationMonth, expirationYear } =
    useCreditCard();

  return (
    <div className="card__expiration-wrapper">
      <div className="card__expiration-month-wrapper">
        <div className="card__expiration-month">{expirationMontOutput}</div>
      </div>
      <span>{expirationMonth && expirationYear ? '/' : ''}</span>
      <div className="card__expiration-year">{expirationYear.substring(2)}</div>
    </div>
  );
};

export default CardExpiration;
