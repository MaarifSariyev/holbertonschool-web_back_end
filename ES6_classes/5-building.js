// 5-building.js
export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    
    // Check if the evacuationWarningMessage method is overridden
    if (this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
