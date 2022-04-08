import React from 'react';
import RobotComponent from './components/RobotComponent';
import RoomComponent from './components/RoomComponent';
import SquareComponent from './components/SquareComponent';
import Robot from './models/Robot';
import Square from './models/Square';

function App() {
  const square: Square = new Square(1, 1);
  square.active = true;
  return (
    <div className="App">

      <RoomComponent />
    </div>
  );
}

export default App;
