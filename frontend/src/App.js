import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Lobby from './Components/Screens/Lobby/Lobby';
import Room from './Components/Screens/Room/Room';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Lobby />} />
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Fragment>
  );
}

export default App;
