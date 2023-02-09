import { useEffect } from "react";
import { isPrime } from "./prime";
import { useLoaderData } from "react-router-dom";
import { Typography, Input, Box } from "@mui/material";
import { green, red } from "@mui/material/colors";
import { useDispatch, useSelector } from "react-redux";
import { setValueForCheck } from "./primeReducer";
import headerImage from "./prime.png";
import "./main.page.css";

function shrink(element, desiredWidth) {
  setTimeout(() => {
    element.width = element.getBoundingClientRect().width - 15;
    if (element.width > desiredWidth) {
      shrink(element, desiredWidth);
    }
  }, 25);
}

export const MainPage = () => {
  const { defaultPrimeValue } = useLoaderData();
  const dispatch = useDispatch();

  // const logoRef = createRef();

  // const mehAnimation = () => {
  //   const originalWidth = logoRef.current.width;
  //   const parentWidth = logoRef.current.parentNode.offsetWidth;
  //   logoRef.current.width = parentWidth;
  //   console.log(originalWidth);
  //   shrink(logoRef.current, originalWidth);
  // };

  useEffect(() => {
    console.log("dpv", defaultPrimeValue);
    dispatch(setValueForCheck(defaultPrimeValue));
  }, []);

  const valueForCheck = useSelector((state) => state.prime.primeValue);
  const isValuePrime = isPrime(+valueForCheck);

  console.log(valueForCheck);

  return (
    <article className="align-center">
      <h1>
        <img
          // ref={logoRef}
          className="prime-header-img"
          src={headerImage}
          alt="Is it prime?"
          // onLoad={mehAnimation}
        />
      </h1>

      <Input
        sx={{ fontSize: "3rem", fontFamily: "Roboto Mono" }}
        type="number"
        value={valueForCheck}
        onChange={(e) => dispatch(setValueForCheck(e.target.value))}
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

      <Box>
        <Typography sx={{ fontFamily: "Tangerine" }} fontSize="2rem">
          This page helps you to check if the certain value is prime or not.
          Simply input the value into the text field and observe the result
        </Typography>
      </Box>
    </article>
  );
};
