import React, {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from 'react';

type CreditCardContextType = {
  isFlipped?: boolean;
  setIsFlipped: (isFlipped: boolean) => void;
  cardNumber: string;
  setCardNumber: (number: string) => void;
  cardName: string;
  setCardName: (name: string) => void;
  cardCvv: string;
  setCardCvv: (cvv: string) => void;
  expirationMonth: string;
  setExpirationMonth: (month: string) => void;
  expirationYear: string;
  setExpirationYear: (year: string) => void;
};

const CreditCardContext =
  createContext<CreditCardContextType | undefined>(undefined);

const CreditCardContextProvider: FunctionComponent = ({ children }) => {
  const [isFlipped, setIsFlipped] = useState<boolean>();
  const [cardNumber, setCardNumber] = useState<string>('');
  const [cardName, setCardName] = useState<string>('');
  const [cardCvv, setCardCvv] = useState<string>('');
  const [expirationMonth, setExpirationMonth] = useState<string>('');
  const [expirationYear, setExpirationYear] = useState<string>('');

  const value: CreditCardContextType = useMemo(
    () => ({
      isFlipped,
      setIsFlipped,
      cardNumber,
      setCardNumber,
      cardName,
      setCardName,
      cardCvv,
      setCardCvv,
      expirationMonth,
      setExpirationMonth,
      expirationYear,
      setExpirationYear,
    }),
    [cardCvv, cardName, cardNumber, expirationMonth, expirationYear, isFlipped],
  );
  return (
    <CreditCardContext.Provider value={value}>
      {children}
    </CreditCardContext.Provider>
  );
};

const useCreditCard = () => {
  const context = useContext(CreditCardContext);
  if (!context) {
    throw new Error(
      'useCreditCard must be used within an CreditCardContextProvider',
    );
  }
  return context;
};

export { CreditCardContextProvider, useCreditCard };
