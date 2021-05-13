import React from 'react';
import SVG from 'react-inlinesvg';
import { useCreditCard } from '../CreditCardContext/CreditCardContext';
import CardExpiration from './CardExpiration';

type Props = {
  showLogo: boolean;
};

const CardFront = ({ showLogo }: Props) => {
  const { cardName, formattedCardNumber, cardIssuer } = useCreditCard();

  return (
    <div className="card__face card__front">
      {showLogo && (
        <SVG
          className="card__logo"
          src={`${process.env.PUBLIC_URL}/logos/${cardIssuer}.svg`}
        />
      )}
      <div className="card__content">
        <div className="card__number">{formattedCardNumber}</div>
        <div className="card__name-expiration-wrapper">
          <div className="card__name-wrapper">
            <div className="card__name-label card__label">Card Holder</div>
            <div className="card__name">{cardName}</div>
          </div>
          <div className="card__expiration-label-wrapper">
            <div className="card__expiration-month-label card__label">
              Valid Thru
            </div>
            <CardExpiration />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardFront;
