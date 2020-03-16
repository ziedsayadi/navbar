import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navmenu from "./Components/navmenu"




const menu = [
  
  { titre: "home" },
  { titre: "services",
   drop: ["for entrepreneurs", "for students", "for hobbyists"]
   },
  { titre: "contact" },






]

function App() {
  return (
    <div className="App">
      <Navmenu x={menu}  />
    </div>


  );
}

export default App;
