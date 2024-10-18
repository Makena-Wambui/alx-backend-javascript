export default function divideFunction(numerator, denominator) {
  // if denominator is equal to 0,
  // the function should throw a new error with the message cannot divide by 0.
  // Otherwise it should return the numerator divided by the denominator.
  if (denominator === 0) {
    throw new Error('cannot divide by 0');
  } else {
    return numerator / denominator;
  }
}
