import { createHashRouter } from "react-router-dom";
import { BASE_PATH } from "./config";
import { Layout } from "./layout";
import { MainPage } from "./main-page/main.page";
import { SecondPage } from "./second-page/second.page";

export const appRouter = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "/second",
          element: <SecondPage />,
        },
      ],
    },
  ],
  {
    basename: BASE_PATH,
  }
);
