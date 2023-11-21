import React from "react";
import ReactDOM from "react-dom/client";
import Modal from "react-modal";
import App from "./App";

// scroll bar
import "simplebar";

// third-party
import { Provider as ReduxProvider } from "react-redux";

// apex-chart
import "./assets/third-party/apex-chart.css";

// project import
import { store } from "./store";

Modal.setAppElement("#root");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <App />
    </ReduxProvider>
  </React.StrictMode>
);
