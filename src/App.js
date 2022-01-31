import React from "react";
import { Route, Switch } from "react-router-dom";
import "./index.css";

import TopNav from "./components/TopNav/TopNav";
import Footer from "./components/Footer/Footer";
import HomePage from "./HomePage";
import Metaverse from "./Metaverse";

function App() {
  return (
    <div className={`app-container`}>
      <TopNav />
      {/* <Route path="/" element={<UnderConstruction />} /> */}
      <Switch>
        <Route path="/features/metaverse">
          <Metaverse />
        </Route>
        <Route path="/">
          <HomePage />
        </Route>
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
