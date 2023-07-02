import { useState } from "react";

const Floor = ({ id, callElevator }) => {
  const [direction, setDirection] = useState(null);

  const handleCallElevator = (floor, direction) => {
    callElevator(floor, direction);
    setDirection(direction);
  };

  return (
    <div>
      <h3>Floor {id}</h3>
      <div>
        <button onClick={() => handleCallElevator(id, "up")} disabled={direction === "up"}>
          Up
        </button>
      </div>
      <div>
        <button onClick={() => handleCallElevator(id, "down")} disabled={direction === "down"}>
          Down
        </button>
      </div>
    </div>
  );
};

export default Floor;
