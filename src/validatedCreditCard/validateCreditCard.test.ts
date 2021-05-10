import validateCreditCard from './validateCreditCard';

describe('validateCreditCard test', () => {
  it('should handle invalid input', () => {
    expect(validateCreditCard(undefined as any)).toBeUndefined();
    expect(validateCreditCard(0 as any)).toBeUndefined();
    expect(validateCreditCard('')).toBeUndefined();
  });

  it('should return correct result for credit cards', () => {
    expect(validateCreditCard('4331482130087309')).toBe(true);
    expect(validateCreditCard('4331482130087301')).toBe(false);
    expect(validateCreditCard('4970454550532912')).toBe(true);
    expect(validateCreditCard('4999983112146028')).toBe(false);
    expect(validateCreditCard('4171826490496208')).toBe(true);
    expect(validateCreditCard('5341631002476744')).toBe(true);
    expect(validateCreditCard('5598877402644601')).toBe(true);
    expect(validateCreditCard('5410801358751109')).toBe(true);
    expect(validateCreditCard('5222866910398499')).toBe(true);
    expect(validateCreditCard('5236095396323029')).toBe(true);
    expect(validateCreditCard('5236 0953 9632 3029')).toBe(true);
  });
});
