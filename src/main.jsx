import React from "react";
import ReactDOM from "react-dom/client";

import { RouterProvider } from "react-router-dom";
import AuthProvider from "./Providers/AuthProvider/AuthProvider";
import MainRouts from "./Routes/MainRouts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={MainRouts} />
    </AuthProvider>
  </React.StrictMode>
);
