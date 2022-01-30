import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import UnderConstruction from "./routes/UnderConstruction/UnderConstruction";
import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import HomePage from "./HomePage";
import Metaverse from "./Metaverse";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="app-container">
        <TopNav />
        <Routes>
          {/* <Route path="/" element={<UnderConstruction />} /> */}

          <Route index element={<HomePage />} />
          <Route path="/features/metaverse" element={<Metaverse />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
