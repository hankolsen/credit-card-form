import React from 'react';

const ExpirationDateInput = () => {
  const months = Array(12).fill(undefined);
  const thisYear = new Date().getFullYear();
  const years = Array(10).fill(undefined);
  return (
    <div>
      <label htmlFor="expirationDate">Expiration Date</label>
      <select>
        <optgroup label="Month">
          {months.map((_, month) => (
            <option>{month + 1}</option>
          ))}
        </optgroup>
      </select>
      <select>
        <optgroup label="Year">
          {years.map((_, year) => (
            <option>{thisYear + year}</option>
          ))}
        </optgroup>
      </select>
    </div>
  );
};
export default ExpirationDateInput;
