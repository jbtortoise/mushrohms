import "./App.css";
import TopNav from "./components/TopNav/TopNav.js";

function App() {
  return (
    <div className="app-container">
      <header>
        <TopNav />
      </header>
      <div className="banner-image-container">
        <img
          className="banner-image"
          src="https://mushrohms.io/images/mushrohms-kingdom-banner.png"
          alt="Mushrohm Kingdom"
        />
      </div>
      <div className="welcome-container">
        <div className="welcome-text-container">
          <div className="welcome-title">Welcome to the Mushrohm Kingdom</div>
          <p className="welcome-text-content">
            At the top of Mt. Olympus grow the fungi of the gods: MUSHROHMS!
            Meditating in infinite ohming bliss, these enlightened creatures
            will one day reach down from the mountaintop to change the
            consciousness of this world and beyond!
          </p>
        </div>
        <div className="welcome-image-container">
          <img
            src="https://mushrohms.io/images/glow-mushrohm.png"
            alt="Glow Mushrohm"
          />
          <div className="welcome-image-label">Glow Mushrohm</div>
        </div>
      </div>
      <div id="sporedrops">sporedrops</div>
    </div>
  );
}

export default App;
