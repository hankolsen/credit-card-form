import React, { useState } from 'react';

import { useCreditCard } from 'CreditCardContext/CreditCardContext';

import './CreditCard.css';
import CardFront from './CardFront';
import CardBack from './CardBack';

const CreditCard = () => {
  const { isFlipped } = useCreditCard();
  const [showLogo, setShowLogo] = useState(true);

  // flipClass should not be set on load!
  // It is needed to animate the "return" rotation from back to front
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

  return (
    <div className="card__wrapper">
      <div className={`card ${flipClass}`} onAnimationStart={onAnimationStart}>
        <CardFront showLogo={showLogo} />
        <CardBack />
      </div>
    </div>
  );
};

export default CreditCard;
