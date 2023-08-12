import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/presentation/App.jsx";
import "@/presentation/styles/index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
