import { useState } from "react";
import "./App.css";
import Carte from "./Components/Carte";

function App() {

  const [data, setData ]= useState([{
    id : 1,
    title : "Basic",
    price : "$19.99",
    disk : "500 GB Storage",
    users: "2 Users Allowed",
    up : "Send up to 3 GB",
    active : false,
  },
  {
    id : 2,
    title : "Professional",
    price : "$24.99",
    disk : "1 TB Storage",
    users: "5 Users Allowed",
    up : "Send up to 10 GB",
    active : false,
  },

  {
    id : 3,
    title : "Master",
    price : "$39.99",
    disk : "2 TB Storage",
    users: "10 Users Allowed",
    up : "Send up to 20 GB",
    active : false,
  }

]);

const handleClick = (id) => {
  let newData = [...data];
  const indexOfMode = newData.findIndex(d => d.id === id);
  newData.map(d => d.active = false);
  newData[indexOfMode].active = !newData[indexOfMode].active;
  setData(newData);
}

  return (
    <div className="App">
      {data.map(d => {
          return(<Carte data={d} key={d.id} handleClick={handleClick}  />)
        })}
    </div>
  );
}

export default App;
