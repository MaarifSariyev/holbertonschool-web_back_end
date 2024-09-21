export default function appendToEachArrayValue(array, appendString) {
  for (const idx in array) {
    const value = array[idx];
    array[value] = appendString + value;
  }
  return array;
}
