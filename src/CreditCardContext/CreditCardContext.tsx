import React, {
  createContext,
  FunctionComponent,
  useContext,
  useMemo,
  useState,
} from 'react';
import getCreditCardIssuer, {
  CreditCardIssuers,
} from '../getCreditCardIssuer/getCreditCardIssuer';

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
  formattedCardNumber: string | undefined;
  cardIssuer: string | undefined;
  cardNumberLength: number;
  expirationMontOutput: string;
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

  const cardIssuer = getCreditCardIssuer(cardNumber);
  const cardNumberLength =
    cardIssuer === CreditCardIssuers.AMERICANEXPRESS ? 15 : 16;
  let formattedCardNumber = cardNumber
    .padEnd(16, '#')
    .match(/([\d|#]{1,4})/g)
    ?.join(' ');

  if (cardIssuer === CreditCardIssuers.AMERICANEXPRESS) {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const [_, ...amexNumbers] =
      cardNumber
        .padEnd(15, '#')
        .match(/([\d|#]{1,4})([\d|#]{1,6})([\d|#]{1,5})/) || [];
    formattedCardNumber = amexNumbers.join(' ');
  }

  const expirationMontOutput = expirationMonth
    ? expirationMonth.padStart(2, '0')
    : '';

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
      formattedCardNumber,
      cardIssuer,
      cardNumberLength,
      expirationMontOutput,
    }),
    [
      cardCvv,
      cardIssuer,
      cardName,
      cardNumber,
      cardNumberLength,
      expirationMontOutput,
      expirationMonth,
      expirationYear,
      formattedCardNumber,
      isFlipped,
    ],
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
