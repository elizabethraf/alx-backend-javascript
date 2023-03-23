import Currency from './3-currency';

export default class Pricing {
  constructor(amount, currency) {
    // Store attributes
    this._amount = amount;
    this._currency = currency;
  }

  // Getter for attribute
  get amount() {
    return this._amount;
  }

  // Setter for attribute
  set amount(newAmount) {
    if (typeof newAmount !== 'number') {
      throw new TypeError('Amount must be a number');
    }
    this._amount = newAmount;
  }

  // Getter for attribute
  get currency() {
    return this._currency;
  }

  // Setter for attribute
  set currency(newCurrency) {
    if (!(newCurrency instanceof Currency)) {
      throw new TypeError('Currency must be an instance of Currency');
    }
    this._currency = newCurrency;
  }

  // Method to display price information
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Static method to convert price
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new TypeError('Amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}
