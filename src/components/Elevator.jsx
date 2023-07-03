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
    <div className="border-2 bg-[#121212] text-xl text-[#f1f1f1] rounded p-5">
      <h3 className="text-center">Elevator {id}</h3>
      <p className="text-center mb-4">Current Floor: {currentFloor}</p>
      <p className="mb-4">
        Destination Floor:{" "}
        <span className="text-red-500">{destinationFloors.length > 0 ? destinationFloors.join(", ") : "None"}</span>
      </p>
      <p className="mb-4">
        Direction: <span className="text-red-500">{direction}</span>
      </p>
      <div className="flex gap-x-4">
        <input
          type="number"
          value={selectedFloor}
          onChange={(e) => setSelectedFloor(e.target.value)}
          placeholder="Enter floor"
          className="outline-none bg-transparent border-2 p-2 rounded-sm"
        />
        <button onClick={handleSelectedDestination} className="select-floor-btn">
          Select Floor
        </button>
      </div>
    </div>
  );
};

export default Elevator;
