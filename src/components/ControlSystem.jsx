import { useEffect, useState } from "react";
import Floor from "../components/Floor";
import Elevator from "./Elevator";

const ControlSystem = () => {
  // Initial state for elevator A
  const [elevatorA, setElevatorA] = useState({
    id: "A",
    currentFloor: 0,
    destinationFloors: [],
    direction: "up",
  });

  // Initial state for elevator B
  const [elevatorB, setElevatorB] = useState({
    id: "B",
    currentFloor: 6,
    destinationFloors: [],
    direction: "down",
  });

  //Implement Up and Down buttons and update their states
  const callElevator = (floor, direction) => {
    const closestElevator = getClosestElevator(floor);

    if (closestElevator === "A") {
      setElevatorA((prev) => ({
        ...prev,
        destinationFloors: [...prev.destinationFloors, floor],
        direction: direction || prev.direction,
      }));
    } else {
      setElevatorB((prev) => ({
        ...prev,
        destinationFloors: [...prev.destinationFloors, floor],
        direction: direction || prev.direction,
      }));
    }
  };

  //  Trigger the 'Select Floor' button
  const selectDestination = (elevatorId, floor) => {
    if (elevatorId === "A") {
      setElevatorA((prev) => ({
        ...prev,
        destinationFloors: [...prev.destinationFloors, floor],
      }));
    } else {
      setElevatorB((prev) => ({
        ...prev,
        destinationFloors: [...prev.destinationFloors, floor],
      }));
    }
  };

  const getClosestElevator = (floor) => {
    const distanceA = Math.abs(elevatorA.currentFloor - floor);
    const distanceB = Math.abs(elevatorB.currentFloor - floor);

    if (distanceA === distanceB) {
      return elevatorA.direction === "up" ? "A" : "B";
    }

    return distanceA < distanceB ? "A" : "B";
  };

  // Simulate the movement of elevator A
  useEffect(() => {
    const elevatorAInterval = setInterval(() => {
      if (elevatorA.destinationFloors.length === 0) return;

      const nextFloor =
        elevatorA.direction === "up"
          ? Math.min(...elevatorA.destinationFloors)
          : Math.max(...elevatorA.destinationFloors);

      setElevatorA((prev) => {
        const updatedDestinationFloors = prev.destinationFloors.filter((floor) => floor !== nextFloor);
        return {
          ...prev,
          currentFloor: nextFloor,
          destinationFloors: updatedDestinationFloors,
        };
      });
    }, 1000);

    return () => clearInterval(elevatorAInterval);
  }, [elevatorA]);

  // Simulate the movement of elevator B
  useEffect(() => {
    const elevatorBInterval = setInterval(() => {
      if (elevatorB.destinationFloors.length === 0) return;
      const nextFloor =
        elevatorB.direction === "up"
          ? Math.min(...elevatorB.destinationFloors)
          : Math.max(...elevatorB.destinationFloors);

      setElevatorB((prev) => {
        const updatedDestinationFloors = prev.destinationFloors.filter((floor) => floor !== nextFloor);
        return {
          ...prev,
          currentFloor: nextFloor,
          destinationFloors: updatedDestinationFloors,
        };
      });
    }, 1000);

    return () => clearInterval(elevatorBInterval);
  }, [elevatorB]);

  return (
    <div>
      <div>
        <Elevator
          id={elevatorA.id}
          currentFloor={elevatorA.currentFloor}
          destinationFloors={elevatorA.destinationFloors}
          direction={elevatorA.direction}
          selectDestination={selectDestination}
        />
        <Elevator
          id={elevatorB.id}
          currentFloor={elevatorB.currentFloor}
          destinationFloors={elevatorB.destinationFloors}
          direction={elevatorB.direction}
          selectDestination={selectDestination}
        />
      </div>
      <div>
        {[0, 1, 2, 3, 4, 5, 6].map((floor) => (
          <Floor key={floor} id={floor} callElevator={callElevator} />
        ))}
      </div>
    </div>
  );
};

export default ControlSystem;
