import { createBrowserRouter, Navigate } from "react-router-dom";
import App from "../App";
import Career from "./Career";
import Introduce from "./Introduce";
import TechStacks from "./TechStacks";

const router = createBrowserRouter(
  [
    {
      path: "",
      element: <App />,
      children: [
        { path: "/introduce", element: <Introduce /> },
        { path: "/tech-stacks", element: <TechStacks /> },
        { path: "/career", element: <Career /> },
        { path: "", element: <Introduce /> },
      ],
    },
    { path: "*", element: <Navigate to="/" /> },
  ],
  {
    basename: process.env.PUBLIC_URL,
  }
);

export default router;
