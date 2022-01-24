import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UnderConstruction from "./routes/UnderConstruction/UnderConstruction";
import TopNav from "./components/TopNav/TopNav";
import HomePage from "./HomePage";
import Footer from "./components/Footer/Footer";

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
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
