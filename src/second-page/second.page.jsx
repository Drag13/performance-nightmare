import moment from "moment/min/moment-with-locales";
import { Switch, FormControlLabel } from "@mui/material";
import { useState } from "react";

export const SecondPage = () => {
  const [lang, setLang] = useState("en");
  const now = moment(new Date()).locale(lang);

  const switchLanguage = (e) => {
    setLang(e.target.checked ? "uk" : "en");
  };

  return (
    <article>
      <h1 className="align-center">War in Ukraine</h1>
      <FormControlLabel
        control={<Switch onChange={switchLanguage} />}
        label="Ukrainian"
      />
      <p className="align-center">
        Today is{" "}
        <strong>
          {now.format("MMMM")}, {now.format("YYYY")} рік
          {", "}
          {moment([2022, 1, 24]).diff(now, "days") * -1}
        </strong>{" "}
        день війни
      </p>
    </article>
  );
};
