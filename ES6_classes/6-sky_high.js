// 6-sky_high.js

import Building from './5-building.js';


export default class SkyHighBuilding extends Building {

  constructor(sqft, floors) {

    super(sqft); // Assign sqft to the parent class Building

    this._floors = floors;

  }


  get sqft() {

    return this._sqft;

  }


  get floors() {

    return this._floors;

  }


  evacuationWarningMessage() {

    return `Evacuate slowly the ${this._floors} floors`; // Remove the trailing period

  }

}
