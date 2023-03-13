import "./Carte.css";

// my function carte1.js

function Carte(props) {
  return (
    <div className={props.data.active ? "carte active" : "carte"} onClick={() => props.handleClick(props.data.id)}>
      <h3>{props.data.title} </h3>
      <h1 className="tilte">
       {props.data.price}
      </h1>
      <ul>
        <li>
          {props.data.disk}
        </li>
        <li>
          {props.data.users}
        </li>
        <li>
          {props.data.up}
        </li>
      </ul>
      <button className="btn">LEARN MORE</button>
    </div>
  );
}

export default Carte;
