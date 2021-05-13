import React, { useRef, useState } from 'react';
import SVG, { Props as SVGProps } from 'react-inlinesvg';

import { useCreditCard } from 'CreditCardContext/CreditCardContext';
import getCreditCardIssuer from '../getCreditCardIssuer/getCreditCardIssuer';

import './CreditCard.css';

const CreditCard = () => {
  const {
    isFlipped,
    cardNumber,
    cardName,
    cardCvv,
    expirationMonth,
    expirationYear,
  } = useCreditCard();
  const [showLogo, setShowLogo] = useState(true);

  let flipClass = '';
  if (isFlipped !== undefined) {
    flipClass = isFlipped ? 'card--flipp' : 'card--flopp';
  }

  /* Overly complicated way of hiding the logo on the backside */
  const onAnimationStart = () => {
    setTimeout(() => {
      setShowLogo(flipClass !== 'card--flipp');
    }, 150);
  };

  const issuer = getCreditCardIssuer(cardNumber);
  const cardNumberOutput = cardNumber
    .padEnd(16, '#')
    .match(/([\d|#]{1,4})/g)
    ?.join(' ');
  const expirationMontOutput = expirationMonth
    ? expirationMonth.padStart(2, '0')
    : '';
  return (
    <div className="card__wrapper">
      <div className={`card ${flipClass}`} onAnimationStart={onAnimationStart}>
        <div className="card__face card__front">
          {showLogo && (
            <SVG
              className="card__logo"
              src={`${process.env.PUBLIC_URL}/logos/${issuer}.svg`}
            />
          )}
          <div className="card__content">
            <div className="card__number">{cardNumberOutput}</div>
            <div className="card__name-expiration-wrapper">
              <div className="card__name-wrapper">
                <div className="card__name-label card__label">Card Holder</div>
                <div className="card__name">{cardName}</div>
              </div>
              <div className="card__expiration-label-wrapper">
                <div className="card__expiration-month-label card__label">
                  Valid Thru
                </div>
                {expirationMonth || expirationYear ? (
                  <div className="card__expiration-wrapper">
                    <div className="card__expiration-month-wrapper">
                      <div className="card__expiration-month">
                        {expirationMontOutput}
                      </div>
                    </div>
                    <span>{expirationMonth && expirationYear ? '/' : ''}</span>
                    <div className="card__expiration-year">
                      {expirationYear.substring(2)}
                    </div>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
        <div className="card__face card__back">
          <div className="card__strips-wrapper">
            <div className="card__magnetic-strip" />
            <div className="card__signature-strip">
              <div className="card__cvv">{cardCvv}</div>
            </div>
          </div>
          <div className="card__content">
            <div className="card__number">{cardNumberOutput}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreditCard;
