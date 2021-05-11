import React from 'react';
import CreditCardNameInput from '../CreditCardNameInput/CreditCardNameInput';
import CreditCardNumberInput from '../CreditCardNumberInput/CreditCardNumberInput';
import CvvInput from '../CvvInput/CvvInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';

import './CreditCardForm.css';

const CreditCardForm = () => {
  return (
    <div className="form__wrapper">
      <form>
        <fieldset>
          <CreditCardNumberInput />
        </fieldset>
        <fieldset>
          <CreditCardNameInput />
        </fieldset>
        <fieldset>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <ExpirationDateInput />
            <CvvInput />
          </div>
        </fieldset>
        <fieldset>
          <button type="submit">Submit</button>
        </fieldset>
      </form>
    </div>
  );
};

export default CreditCardForm;
