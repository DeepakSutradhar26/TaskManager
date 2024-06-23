import React, { useState, useCallback, useEffect } from 'react';
import "./Lobby.css";
import { useSocket } from "../../../context/SocketProvider";
import { useNavigate } from 'react-router-dom';

const Lobby = () => {
    const [email, setEmail] = useState();
    const [room, setRoom] = useState();
    const socket = useSocket();
    const navigate = useNavigate();

    const handleSubmit = useCallback((e) => {
        e.preventDefault();
        socket.emit("room:join", { email, room });
    }, [email, room, socket]);

    const handleRoomJoin = useCallback((data) => {
        const { room } = data;
        navigate(`/room/${room}`);
    }, [navigate]);

    useEffect(() => {
        socket.on("room:join", handleRoomJoin);
        return () => {
            socket.off("room:join", handleRoomJoin);
        }
    }, [socket]);

    return (
        <>
            <div className="lobby_container flex justify-center items-center">
                <div className='lobby'>
                    <h1>Lobby</h1>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="email">Email ID</label>
                        <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                        <br />
                        <label htmlFor="room">Room Number</label>
                        <input type="text" id="room" value={room} onChange={e => setRoom(e.target.value)} />
                        <br />
                        <button>JOIN</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Lobby;