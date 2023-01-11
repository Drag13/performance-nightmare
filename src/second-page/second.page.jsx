import moment from "moment";

export const SecondPage = () => (
  <article>
    <h1 className="align-center">Second page</h1>
    <p className="align-center">
      Сьогодні{" "}
      <strong>{moment([2022, 1, 24]).diff(new Date(), "days") * -1}</strong>{" "}
      день війни
    </p>
  </article>
);
