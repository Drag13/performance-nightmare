import { useState } from "react";
import { DEFAULT_PRIME } from "../config";
import headerImage from "./prime.png";
import "./main.page.css";

function createArray(n) {
  return new Array(n).fill(0).map((_, i) => ({ value: i, isPrime: true }));
}

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

function isPrime(rawValue) {
  const value = +rawValue;
  if (!value || Number.isNaN(value)) {
    return false;
  }

  const arr = createArray(value + 1);
  const primes = markPrimesInefficient(arr);

  return primes[value].isPrime;
}

export const MainPage = () => {
  const [valueForCheck, setCheckValue] = useState(DEFAULT_PRIME);
  const isValuePrime = isPrime(valueForCheck);

  const updateCheckValue = (e) => {
    setCheckValue(e.target.value);
  };

  return (
    <article className="align-center">
      <h1>
        <img
          className="prime-header-img"
          src={headerImage}
          alt="Is it prime?"
        />
      </h1>
      <input
        className="prime-input"
        type="number"
        value={valueForCheck}
        onChange={updateCheckValue}
      />

      <p className={`prime-block ${isValuePrime ? "prime" : ""}`}>
        {isValuePrime ? "Prime" : "Non Prime"}
      </p>
    </article>
  );
};
