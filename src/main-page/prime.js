import { createArray } from "./array";

function markPrimesInefficient(array) {
  for (let i = 0; i < array.length; i++) {
    const { value } = array[i];

    for (let k = 0; k < array.length; k++) {
      const t = array[k];
      const checkingValue = t.value;
      if (
        checkingValue % value === 0 &&
        checkingValue !== value &&
        value !== 0 &&
        value !== 1
      ) {
        t.isPrime = false;
      }
    }
  }

  return array;
}

/**
 *
 * @param {number} rawValue value to check if it is prime
 * @returns {boolean} is number prime
 */
export function isPrime(rawValue) {
  const value = +rawValue;
  if (!value || Number.isNaN(value)) {
    return false;
  }

  const arr = createArray(value + 1);
  const primes = markPrimesInefficient(arr);

  return primes[value].isPrime;
}
