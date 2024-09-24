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
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}

describe('Building class', () => {
  it('should throw an error if evacuationWarningMessage is not overridden', () => {
    class IncompleteBuilding extends Building {}

    const building = new IncompleteBuilding(100);
    
    // Check that calling the method throws the expected error
    expect(() => {
      building.evacuationWarningMessage(); // This should throw
    }).toThrow("Class extending Building must override evacuationWarningMessage");
  });

  it('should allow instantiation of subclasses that override evacuationWarningMessage', () => {
    class TestBuilding extends Building {
      evacuationWarningMessage() {
        return "Evacuate the building!";
      }
    }

    const building = new TestBuilding(200);
    expect(building.sqft).toBe(200);
    expect(building.evacuationWarningMessage()).toBe("Evacuate the building!");
  });
});
