export const creditCardVendors = {
  VISA: 'Visa',
  MASTERCARD: 'Master Card',
  AMERICANEXPRESS: 'American Express',
  DINERS: 'Diners Club',
};

const getCreditCardIssuer = (entry: string) => {
  const patterns: { [vendor: string]: RegExp } = {
    [creditCardVendors.VISA]: /^4\d+$/,
    [creditCardVendors.MASTERCARD]: /^(?:5[1-5]|2[2-7])\d+$/,
    [creditCardVendors.AMERICANEXPRESS]: /^3[4|7]\d+$/,
    [creditCardVendors.DINERS]: /^30[0-5]|309\d+$/,
  };

  let cardVendor;
  Object.entries(patterns).some(([vendor, regexp]) => {
    if (regexp.test(entry)) {
      cardVendor = vendor;
      return true;
    }
  });
  return cardVendor;
};

export default getCreditCardIssuer;
