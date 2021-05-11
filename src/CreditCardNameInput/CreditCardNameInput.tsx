import React from 'react';

import './CreditCardNameInput.css';

const CreditCardNameInput = () => (
  <>
    <label htmlFor="cardName">Card Name</label>
    <input type="text" name="cardName" id="cardName" />
  </>
);

export default CreditCardNameInput;
