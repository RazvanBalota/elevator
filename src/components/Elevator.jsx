import React, { useState } from "react";

const Elevator = ({ id, currentFloor, destinationFloors, direction, selectDestination }) => {
  const [selectedFloor, setSelectedFloor] = useState("");

  const handleSelectedDestination = () => {
    if (selectedFloor !== "") {
      selectDestination(id, parseInt(selectedFloor));
      setSelectedFloor("");
    }
  };

  return (
    <div>
      <h3>Elevator {id}</h3>
      <p>Current Floor: {currentFloor}</p>
      <p>Destination Floors: {destinationFloors.length > 0 ? destinationFloors.join(", ") : "None"}</p>
      <p>Direction: {direction}</p>
      <div>
        <input type="number" value={selectedFloor} onChange={(e) => setSelectedFloor(e.target.value)} />
        <button onClick={handleSelectedDestination}>Select Floor</button>
      </div>
    </div>
  );
};

export default Elevator;
