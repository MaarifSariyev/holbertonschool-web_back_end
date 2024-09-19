export default function getNeighborhoodsList() {
  sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];
  
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods = [...this.sanFranciscoNeighborhoods, newNeighborhood];
    return this.sanFranciscoNeighborhoods;
  };
}

