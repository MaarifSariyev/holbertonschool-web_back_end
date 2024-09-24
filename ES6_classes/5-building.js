export default class Building {
  constructor(sqft) {
    this.sqft = sqft; // Calls the setter to validate and set the value
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
   return throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
