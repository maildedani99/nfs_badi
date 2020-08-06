import React from 'react';
import './App.css';
import RoomCard from './components/roomCard/roomCard.view';
import Navbar from './components/navbar';


function App () {
  return (
    <div className="App">
      <Navbar />
      <RoomCard />
    </div>
  );
}

export default App;
