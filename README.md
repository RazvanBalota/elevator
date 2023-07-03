# Elevator Control System

This is a React application that simulates an elevator control system for a building with N floors. It allows users to
call and control two elevators, select destinations, and observe the state of each elevator and the direction of
movement for each floor.

## Functionality

- Two elevators, Elevator A and Elevator B, are initially positioned at the ground floor and the top floor,
  respectively.
- Users can call an elevator from any floor and the closest available elevator will respond.
- If both elevators are equidistant from the called floor, the elevator from the lower floor will respond.
- Each elevator displays its current floor, destination floors, and direction of movement.
- Each floor displays buttons for calling the elevator in the up and down directions.
- Inside each elevator, there are buttons to select the destination floor.

## How to Run

1. Clone this repository to your local machine.
2. Navigate to the project directory using a terminal.
3. Install the dependencies by running the command `npm install`.
4. Start the application with the command `npm start`.

## Usage

- Use the up and down buttons on each floor to call the closest elevator.
- Inside an elevator, enter a valid floor number in the input field and click "Select Floor" to set a destination.
- Observe the elevator's current floor, destination floors, and direction of movement.
