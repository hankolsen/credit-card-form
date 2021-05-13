import getCreditCardIssuer, { CreditCardIssuers } from './getCreditCardIssuer';

describe('getCreditCardIssuer test', () => {
  it('should handle invalid entries', () => {
    expect(getCreditCardIssuer(undefined as any)).toBeUndefined();
    expect(getCreditCardIssuer(0 as any)).toBeUndefined();
    expect(getCreditCardIssuer('')).toBeUndefined();
  });

  it('should return correct issuer numbers', () => {
    expect(getCreditCardIssuer('4331482130087309')).toBe(
      CreditCardIssuers.VISA,
    );
    expect(getCreditCardIssuer('4331482130087309')).toBe(
      CreditCardIssuers.VISA,
    );
    expect(getCreditCardIssuer('4970454550532912')).toBe(
      CreditCardIssuers.VISA,
    );
    expect(getCreditCardIssuer('5341631002476744')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCreditCardIssuer('5410801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCreditCardIssuer('5598877402644601')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCreditCardIssuer('5041631002476744')).toBeUndefined();
    expect(getCreditCardIssuer('5610801358751109')).toBeUndefined();
    expect(getCreditCardIssuer('2210801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCreditCardIssuer('2323801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCreditCardIssuer('2723801358751109')).toBe(
      CreditCardIssuers.MASTERCARD,
    );
    expect(getCreditCardIssuer('2823801358751109')).toBeUndefined();
    expect(getCreditCardIssuer('2123801358751109')).toBeUndefined();
    expect(getCreditCardIssuer('3423801358751109')).toBe(
      CreditCardIssuers.AMERICANEXPRESS,
    );
    expect(getCreditCardIssuer('3723801358751109')).toBe(
      CreditCardIssuers.AMERICANEXPRESS,
    );
    expect(getCreditCardIssuer('3323801358751109')).toBeUndefined();
    expect(getCreditCardIssuer('3003801358751109')).toBe(
      CreditCardIssuers.DINERS,
    );
    expect(getCreditCardIssuer('3023801358751109')).toBe(
      CreditCardIssuers.DINERS,
    );
    expect(getCreditCardIssuer('3053801358751109')).toBe(
      CreditCardIssuers.DINERS,
    );
    expect(getCreditCardIssuer('3123801358751109')).toBeUndefined();

    expect(getCreditCardIssuer('2131801358751109')).toBe(CreditCardIssuers.JCB);
    expect(getCreditCardIssuer('1800801358751109')).toBe(CreditCardIssuers.JCB);
    expect(getCreditCardIssuer('3500801358751109')).toBe(CreditCardIssuers.JCB);
    expect(getCreditCardIssuer('2132801358751109')).toBeUndefined();

    expect(getCreditCardIssuer('6011180135875110')).toBe(
      CreditCardIssuers.DISCOVER,
    );
    expect(getCreditCardIssuer('6012180135875110')).toBeUndefined();
    expect(getCreditCardIssuer('6511180135875110')).toBe(
      CreditCardIssuers.DISCOVER,
    );
    expect(getCreditCardIssuer('6411180135875110')).toBeUndefined();
  });
});
