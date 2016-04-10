/*
 * Wrapper for money representation. Uses `Number.prototype.toLocaleString`
 * under the hood.
 */
const FormatMoney = function FormatMoney(
 amountInCents, locales, currency, options={}, precision=2
) {
  if (locales == null) {
    throw new Error("locales must be provided");
  }

  if (currency == null) {
    throw new Error("currency must be provided");
  }

  const VIEW_OPTIONS = {
    currency:              currency,
    style:                 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2
  }

  function toString() {
    const localeOptions = Object.assign({}, VIEW_OPTIONS, options);
    return amountInFixedPoint().toLocaleString(locales, localeOptions);
  }

  function amountInFixedPoint() {
    return (amountInCents / Math.pow(10, precision));
  }

  return toString();
}

export default FormatMoney;
