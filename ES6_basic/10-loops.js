export default function appendToEachArrayValue(array, appendString) {
  for (const idx of array) {
    const value = array.indexOf(idx);
    array[value] = appendString + value;
  }
  return array;
}
