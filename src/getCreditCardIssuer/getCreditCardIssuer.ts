export const creditCardVendors = {
  VISA: 'visa',
  MASTERCARD: 'mastercard',
  AMERICANEXPRESS: 'amex',
  DINERS: 'diners',
};

const getCreditCardIssuer = (entry: string) => {
  const patterns: { [vendor: string]: RegExp } = {
    [creditCardVendors.VISA]: /^4/,
    [creditCardVendors.MASTERCARD]: /^(?:5[1-5]|2[2-7])/,
    [creditCardVendors.AMERICANEXPRESS]: /^3[4|7]/,
    [creditCardVendors.DINERS]: /^30[0-5]|309/,
  };

  let cardVendor;
  Object.entries(patterns).some(([vendor, regexp]) => {
    if (regexp.test(entry)) {
      cardVendor = vendor;
      return true;
    }
    return false;
  });
  return cardVendor;
};

export default getCreditCardIssuer;
