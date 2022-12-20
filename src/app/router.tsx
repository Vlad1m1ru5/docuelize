import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/home";
import { NotFound } from "../pages/not_found";
import { Root } from "../pages/root";

export const router = createBrowserRouter([
  {
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
