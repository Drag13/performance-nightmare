import _ from "lodash";

export function createArray(n) {
  return _.range(n).map((_, i) => ({ value: i, isPrime: true }));
  // return new Array(n).fill(0).range(n).map((_, i) => ({ value: i, isPrime: true }));
}
