import React from "react";
import ReactDOM from "react-dom/client";
import App from "@/presentation/App.jsx";
import "@/presentation/styles/index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@/application/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
