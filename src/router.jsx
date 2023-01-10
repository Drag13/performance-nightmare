import { createHashRouter } from "react-router-dom";
import { BASE_PATH } from "./config";
import { Layout } from "./layout";

export const appRouter = createHashRouter(
  [
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          index: true,
          element: <>First Page</>,
        },
        {
          path: "/second",
          element: <>Second Page</>,
        },
      ],
    },
  ],
  {
    basename: BASE_PATH,
  }
);
