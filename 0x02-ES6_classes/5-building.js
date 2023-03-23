export default class Building {
  constructor(sqft) {
    // Abstract method that must be implemented by any subclass
    if (this.constructor !== Building && !this.evacuationWarningMessage) throw Error('Class extending Building must override evacuationWarningMessage');

    // Create objects
    this._sqft = sqft;
  }

  // Getters
  get sqft() {
    return this._sqft;
  }
}
