import { Component } from "react";
import "./Carte23.css";

class Carte2 extends Component {
  render() {
    return (
      <div className="carte2">
        <h3>Basic </h3>
        <h1 className="tilte">
          <span>$</span>19.99
        </h1>
        <ul>
          <li>
            <a href="#">500 GB Storage</a>
          </li>
          <li>
            <a href="#">2 Users Allowed</a>
          </li>
          <li>
            <a href="#">Send up to 3 GB</a>
          </li>
        </ul>
        <button>LEARN MORE</button>
      </div>
    );
  }
}
export default Carte2;
