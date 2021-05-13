import React from 'react';
import CreditCard from 'CreditCard/CreditCard';
import CreditCardNameInput from '../CreditCardNameInput/CreditCardNameInput';
import CreditCardNumberInput from '../CreditCardNumberInput/CreditCardNumberInput';
import CvvInput from '../CvvInput/CvvInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';

import './CreditCardForm.css';

const CreditCardForm = () => (
  <div className="wrapper">
    <div>
      <CreditCard />
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
    </div>
  </div>
);

export default CreditCardForm;
