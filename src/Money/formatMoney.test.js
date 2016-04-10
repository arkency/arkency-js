import test  from 'tape';
import Money from './money';

test('Money correctly parses amounts in cents',
  function testMoneyToStringIfAmountLessThan3Digits(assert) {
    assert.plan(1)
    const amount = 10;
    const money = Money(amount, testLocale, testCurrency);
    assert.equal(money, '£0.10')
  }
);
test('Money correctly parses amounts in cents with custom precision',
  function testMoneyToStringWithCustomPrecision(assert) {
    assert.plan(1)
    const amount    = 1023;
    const precision = 4;
    const options   = {
      maximumFractionDigits: precision,
      minimumFractionDigits: precision
    };
    const money = Money(amount, testLocale, testCurrency, options, precision);
    assert.equal(money, '£0.1023');
  }
);

test('Money requires locales argument',
  function testLocalesRequirement(assert) {
    assert.plan(1);
    assert.throws(function() {
      Money(10);
    });
  }
);
test('Money requires currency argument',
  function testCurrencyRequirement(assert) {
    assert.plan(1);
    assert.throws(function() {
      Money(10, testLocale);
    });
  }
);

const testLocale   = 'en-GB';
const testCurrency = 'GBP';
