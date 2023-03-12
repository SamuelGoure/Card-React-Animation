import "./App.css";
import Carte1 from "./Components/Carte1";
import Carte2 from "./Components/Carte2";

function App() {
  return (
    <div className="App">
      <Carte2 />
      <div className="carte1">
        <h3>Professional </h3>
        <h1>
          <span>$</span>24.99
        </h1>
        <ul className="listes">
          <li>
            <a href="#">1TB Storage</a>
          </li>
          <li>
            <a href="#">5 Users Allowed</a>
          </li>
          <li>
            <a href="#">Send up to 10 GB</a>
          </li>
        </ul>
        <button className="btn1">LEARN MORE</button>
      </div>

      <Carte1 />
    </div>
  );
}

export default App;
