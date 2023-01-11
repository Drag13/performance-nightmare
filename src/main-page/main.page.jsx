import { useState } from "react";
import { isPrime } from "./prime";
import headerImage from "./prime.png";
import { useLoaderData } from "react-router-dom";
import "./main.page.css";

export const MainPage = () => {
  const { defaultPrimeValue } = useLoaderData();
  const [valueForCheck, setCheckValue] = useState(defaultPrimeValue);
  const isValuePrime = isPrime(+valueForCheck);

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
