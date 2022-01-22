import "./App.css";
import TopNav from "./components/TopNav/TopNav.js";

function App() {
  return (
    <div className="app-container">
      <header>
        <TopNav />
      </header>
      <div style={{ height: "1000px" }}>filler</div>
      <div id="sporedrops">sporedrops</div>
    </div>
  );
}

export default App;
