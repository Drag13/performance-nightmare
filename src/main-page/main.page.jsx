import { useState } from "react";
import { isPrime } from "./prime";
import { useLoaderData } from "react-router-dom";
import { Typography, Input, Box } from "@mui/material";
import { green, red } from "@mui/material/colors";
import headerImage from "./prime.png";
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

      <Input
        sx={{ fontSize: "3rem", fontFamily: "Roboto Mono" }}
        type="number"
        value={valueForCheck}
        onChange={updateCheckValue}
      />

      <Typography
        variant="h3"
        sx={{
          padding: "1rem",
          color: isValuePrime ? green[400] : red[400],
          fontFamily: "Inconsolata",
        }}
      >
        {isValuePrime ? "Prime" : "Non Prime"}
      </Typography>

      <Box component="p" >
        <Typography sx={{ fontFamily: "Tangerine" }} fontSize="2rem">
          This page helps you to check if the certain value is prime or not.
          Simply input the value into the text field and observe the result
        </Typography>
      </Box>
    </article>
  );
};
