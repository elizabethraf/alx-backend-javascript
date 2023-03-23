export default class Currency {
  constructor(code, name) {
    // Store attributes
    this._code = code;
    this._name = name;
  }

  // Getter for attribute
  get code() {
    return this._code;
  }

  // Setter for attribute
  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw new TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Setter for name attribute
  set name(newName) {
    if (typeof newName !== 'string') {
      throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }

  // Method to display currency information
  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
