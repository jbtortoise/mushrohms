import "./App.css";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
      <div>Homepage</div>
      <Link to="/collection">Collection page</Link>
    </div>
  );
}

export default App;
