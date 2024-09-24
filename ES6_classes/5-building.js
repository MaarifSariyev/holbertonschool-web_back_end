export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // Calls the setter to validate and set the value
    Building.validateInstantiation();
  }

  static validateInstantiation() {
    if (this === Building) {
      throw new Error("Cannot instantiate abstract class Building");
    }
  }

  // Getter for sqft
  get sqft() {
    return this._sqft;
  }

  // Setter for sqft
  set sqft(value) {
    if (typeof value !== 'number') {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = value;
  }

  // Abstract method
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
