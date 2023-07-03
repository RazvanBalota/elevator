import { useState } from "react";

const Floor = ({ id, callElevator }) => {
  const [direction, setDirection] = useState(null);

  const handleCallElevator = (floor, direction) => {
    callElevator(floor, direction);
    setDirection(direction);
  };

  return (
    <div className="flex gap-5 mb-4">
      <h3 className="font-bold text-xl p-4">Floor {id}</h3>
      <div>
        <button onClick={() => handleCallElevator(id, "up")} disabled={direction === "up"} className="up-down-btn">
          Up
        </button>
      </div>
      <div>
        <button onClick={() => handleCallElevator(id, "down")} disabled={direction === "down"} className="up-down-btn">
          Down
        </button>
      </div>
    </div>
  );
};

export default Floor;
