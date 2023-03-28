export default function createInt8TypedArray(length, position, value) {
  // Create a new ArrayBuffer with the given length
  const buffer = new ArrayBuffer(length);

  // Create a new Int8Array view on the buffer
  const int8Array = new Int8Array(buffer);

  // Check if the position is within range
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  // Set the value at the given position
  int8Array[position] = value;

  return buffer;
}
