// 5-typed_arrays.js
const createInt8TypedArray = (length, position, value) => {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const buffer = new ArrayBuffer(length);
  const int8Array = new Int8Array(buffer);

  int8Array[position] = value;

  const dataView = new DataView(buffer);
  return dataView; // Return DataView instead of Int8Array
};

export default createInt8TypedArray;
