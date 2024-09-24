export default class Building {
  constructor(sqft) {
    // Set the sqft attribute
    this.sqft = sqft; // Calls the setter to validate and set the value
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

  // Abstract method to enforce implementation in subclasses
  evacuationWarningMessage() {
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

const b = new Building(100);
console.log(b);

class TestBuilding extends Building {}

try {
    new TestBuilding(200);
} catch (err) {
    console.log(err.message); // Should log the error about overriding the method
}

// Example of a valid subclass
class ValidBuilding extends Building {
  evacuationWarningMessage() {
    return "Evacuate the building!";
  }
}

const validBuilding = new ValidBuilding(300);
console.log(validBuilding.evacuationWarningMessage()); // Should work
