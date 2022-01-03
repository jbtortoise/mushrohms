import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import Collection from "./routes/Collection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/collection" element={<Collection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
