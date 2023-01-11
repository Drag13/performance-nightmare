import { createHashRouter } from "react-router-dom";
import { BASE_PATH } from "./config";
import { Layout, userLoader } from "./layout";
import { mainPageLoader } from "./main-page/main.loader";
import { MainPage } from "./main-page/main.page";
import { SecondPage } from "./second-page/second.page";

export const appRouter = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      loader: userLoader,
      children: [
        {
          index: true,
          element: <MainPage />,
          loader: mainPageLoader,
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
