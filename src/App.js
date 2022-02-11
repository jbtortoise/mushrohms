import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";

import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import HomePage from "./HomePage";
import Bridgeworld from "./Bridgeworld";
import VRKingdom from "./VRKingdom";
import ShrohmCouncil from "./ShrohmCouncil";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <div className={`app-container`}>
      {/* <ScrollToTop> */}
      <TopNav />
      {/* <Route path="/" element={<UnderConstruction />} /> */}
      <Switch>
        <Route path="/features/bridgeworld">
          <Bridgeworld />
        </Route>
        <Route path="/features/vr-kingdom">
          <VRKingdom />
        </Route>
        <Route path="/features/shrohmie-council">
          <ShrohmCouncil />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
      {/* </ScrollToTop> */}
    </div>
  );
}

export default App;
