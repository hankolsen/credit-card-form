import React from 'react';
import { useCreditCard } from 'CreditCardContext/CreditCardContext';

const ExpirationDateInput = () => {
  const {
    expirationMonth,
    setExpirationMonth,
    expirationYear,
    setExpirationYear,
  } = useCreditCard();

  const onMonthChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setExpirationMonth(value);
  };
  const onYearChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = event.target;
    setExpirationYear(value);
  };

  const months = Array(12).fill(undefined);
  const thisYear = new Date().getFullYear();
  const years = Array(10).fill(undefined);
  return (
    <div>
      <label htmlFor="expirationDate">Expiration Date</label>
      <select value={expirationMonth || 'Month'} onChange={onMonthChange}>
        <option disabled>Month</option>
        {months.map((_, month) => (
          <option key={`month-${month + 1}`}>{month + 1}</option>
        ))}
      </select>
      <select value={expirationYear || 'Year'} onChange={onYearChange}>
        <option disabled>Year</option>
        {years.map((_, year) => (
          <option key={`year-${thisYear + year}`}>{thisYear + year}</option>
        ))}
      </select>
    </div>
  );
};
export default ExpirationDateInput;
