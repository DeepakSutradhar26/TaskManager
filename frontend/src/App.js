import { Fragment } from 'react';
import './App.css';
import { Routes, Route } from "react-router-dom";
import Lobby from './Components/Screens/Lobby/Lobby';
import Room from './Components/Screens/Room/Room';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />}></Route>
        <Route path="/lobby" element={<Lobby />}></Route>
        <Route path="/room/:roomId" element={<Room />} />
      </Routes>
    </Fragment>
  );
}

export default App;
