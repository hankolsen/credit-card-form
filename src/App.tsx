import React from 'react';
import CreditCardForm from './CreditCardForm/CreditCardForm';

import './App.css';
import { CreditCardContextProvider } from './CreditCardContext/CreditCardContext';

function App() {
  return (
    <div className="App">
      <CreditCardContextProvider>
        <CreditCardForm />
      </CreditCardContextProvider>
    </div>
  );
}

export default App;
