export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    if (Object.getOwnPropertyNames(this.constructor.prototype).includes('evacuationWarningMessage') === false) {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}
