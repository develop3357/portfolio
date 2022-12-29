import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error404 from "../components/Error404";
import Intro from "./Intro";

const router = createBrowserRouter([
  {
    path: "",
    element: <App />,
    errorElement: <Error404 />,
    children: [
      {
        path: "/intro",
        element: <Intro />,
      },
    ],
  },
]);

export default router;
