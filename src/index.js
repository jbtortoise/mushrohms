import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UnderConstruction from "./routes/UnderConstruction/UnderConstruction";
import TopNav from "./components/TopNav/TopNav.js";
import HomePage from "./HomePage";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app-container">
        <header>
          <TopNav />
        </header>
        <Routes>
          {/* <Route path="/" element={<UnderConstruction />} /> */}

          <Route index element={<HomePage />} />
        </Routes>
        <footer>SHROHM LOGO</footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
