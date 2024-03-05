import React, { useState } from "react"; 

export const TrafficLight = () => {
    const [selectedColor, setSelectedColor] = useState("");
  return (
    <div className="container">
        <div className="pole"></div>
      <div className="traffic-light">
        <div onClick={()=> setSelectedColor("red")} 
        className={`light red ${selectedColor === "red" ? " glow" : ""}`}></div>
        <div onClick={()=> setSelectedColor("yellow")}  
        className={`light yellow ${selectedColor === "yellow" ? " glow" : ""}`}></div>
        <div onClick={()=> setSelectedColor("green")}  
        className={`light green ${selectedColor === "green" ? " glow" : ""}`}></div>
      </div>
    </div>
  );
};
