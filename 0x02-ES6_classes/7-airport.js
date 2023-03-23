export default class Airport {
  constructor(name, code) {
    // Create objects
    this._name = name;
    this._code = code;
  }

  // Getter for name attribute
  get name() {
    return this._name;
  }

  // Getter for code attribute
  get code() {
    return this._code;
  }

  // Default string description of the class
  toString() {
    return this._code;
  }
}
