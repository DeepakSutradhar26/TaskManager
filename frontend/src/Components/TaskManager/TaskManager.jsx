import React, { useEffect, useState } from 'react';
import "./TaskManager.css";
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch } from "react-redux";
import { getUserTasks } from '../../Action/taskAction';
import Task from "./Task/Task";

const TaskManager = () => {
    const [state, setState] = useState(false);
    const dispatch = useDispatch();

    const handleAddTask = () => {
        setState(!state);
    }

    useEffect(() => {
        dispatch(getUserTasks());
    }, [dispatch]);

    return (
        <>
            <div className='flex flex-row justify-evenly items-center
            absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]'
            >
                <div className="left_col flex flex-col">
                    <div className="profileBox"></div>
                    <div className="sideBar flex flex-col">
                        <ul className='flex flex-col '>
                            <li>
                                <IoHome className='text-white ' /> <Link to="/">Home</Link>
                            </li>
                            <li>
                                <GiHamburgerMenu className='text-white' /><Link to="/allTasks">All Tasks</Link>
                            </li>
                            <li>
                                <FaTasks className='text-white' /><Link to="/important">Important</Link>
                            </li>
                            <li>
                                <FaCalendarCheck className='text-white' /><Link to="/completed">Completed</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="right_col">
                    <div className="head_txt flex flex-row items-center justify-between">
                        <span className='task_header text-white'>Tasks</span>
                        <div onClick={handleAddTask} className="circle_ctn flex justify-center items-center">
                            <FaPlus className='plus_btn text-white' />
                        </div>
                    </div>
                    <div className="task_box">
                        <Task />
                    </div>
                </div>
            </div>
            {state && (<div onClick={handleAddTask} className="addTaskBox flex justify-center items-center">
                <form className="fillBox absolute flex flex-col">
                    <div className="headCreateTask">
                        Create a Task
                    </div>
                    <div className="title">
                        Title
                    </div>
                    <input className='inputTask1' type="text" />
                    <div className="description">
                        Description
                    </div>
                    <input className='inputTask2' type="text" />
                    <div className="toggleBox flex flex-row items-center justify-between">
                        <div className="toggleText">Toggle Completed</div>
                        <input type="checkbox" />
                    </div>
                    <div className="toggleBox flex flex-row items-center justify-between">
                        <div className="toggleText">Toggle Important</div>
                        <input type="checkbox" />
                    </div>
                    <div className="createIcon">
                        <FaPlus />
                        <span cl>Create Task</span>
                    </div>
                </form>
            </div>)}
        </>
    )
}

export default TaskManager;