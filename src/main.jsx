import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { TimeFrameContextProvider } from "./context/TimeFrameContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TimeFrameContextProvider>
      <App />
    </TimeFrameContextProvider>
  </React.StrictMode>
);
