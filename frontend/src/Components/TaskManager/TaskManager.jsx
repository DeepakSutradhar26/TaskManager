import React, { useEffect, useState } from 'react';
import "./TaskManager.css";
import "./scrollbar.css";
import { Link } from 'react-router-dom';
import { IoHome } from "react-icons/io5";
import { FaPlus } from "react-icons/fa";
import { FaCalendarCheck } from "react-icons/fa";
import { FaTasks } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
import { createTask, getUserTasks } from '../../Action/taskAction';
import Task from "./Task/Task";
import { useAlert } from "react-alert";

const TaskManager = () => {
    const [state, setState] = useState(false);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [toggleImp, setToggleImp] = useState(false);
    const [toggleComplete, setToggleComplete] = useState(false);
    const dispatch = useDispatch();
    const alert = useAlert();
    const { tasks, error } = useSelector((state) => state.task);

    const handleAddTask = () => {
        setState(!state);
    }

    const handleSumbit = async (e) => {
        e.preventDefault();
        await dispatch(createTask(title, description, toggleImp, toggleComplete));
    }

    useEffect(() => {
        dispatch(getUserTasks());
    }, [dispatch]);

    useEffect(() => {
        if (error) {
            alert.error(error);
            dispatch({ type: "clearErrors" });
        }
    }, [dispatch, error, alert]);

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
                    <div className="task_box flex flex-row flex-wrap justify-evenly">
                        {tasks && tasks.map((task) => (
                            <Task
                                key={task._id}
                                title={task.title}
                                description={task.description}
                                toggleImp={task.toggleImp}
                                toggleComplete={task.toggleComplete}
                            />
                        ))}
                    </div>
                </div>
            </div>
            {state && (<div className="addTaskBox flex justify-center items-center">
                <form className="fillBox absolute flex flex-col items-center" onSubmit={handleSumbit}>
                    <div className="headCreateTask wid_int flex item-center">
                        <p className='flex items-center'>  Create a Task </p>
                    </div>
                    <div className="title wid_int">
                        Title
                    </div>
                    <input
                        className='inputTask1 wid_int'
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <div className="description wid_int">
                        Description
                    </div>
                    <textarea
                        className='inputTask2 wid_int'
                        value={description}
                        onChange={e => setDescription(e.target.value)}
                    />
                    <div className="toggleBox1 flex flex-row items-center justify-between wid_int">
                        <div className="toggleText text-white">Toggle Completed</div>
                        <input
                            type="checkbox"
                            checked={toggleComplete}
                            onChange={e => setToggleComplete(e.target.checked)}
                        />
                    </div>
                    <div className="toggleBox2 flex flex-row items-center justify-between wid_int">
                        <div className="toggleText text-white">Toggle Important</div>
                        <input
                            type="checkbox"
                            checked={toggleImp}
                            onChange={e => setToggleImp(e.target.checked)}
                        />
                    </div>
                    <div className="addMargin wid_int flex items-center justify-end">
                        <button type='submit' className="createIcon bg-blue-500 hover:bg-blue-400 hover:cursor-pointer flex flex-row justify-evenly items-center">
                            <FaPlus className='icon_style2' />
                            <span className='text-white title'>Create Task</span>
                        </button>
                    </div>
                </form>
            </div>)}
            {state && <div onClick={handleAddTask} className="blackBox"></div>}
        </>
    )
}

export default TaskManager;