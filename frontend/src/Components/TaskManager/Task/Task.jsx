import React from 'react';
import { MdDelete } from "react-icons/md";
import { IoCreate } from "react-icons/io5";
import "./Task.css";

const Task = () => {
    return (
        <div className='taskContainer'>
            <div className="txt_header flex justify-center items-center text-white">
                <div className="fxBox1 overflow-ellipsis whitespace-nowrap overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit, doloremque?
                </div>
            </div>
            <div className="txt_box text-white flex justify-center items-center">
                <div className="fxBox2 overflow-ellipsis overflow-hidden">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur neque reiciendis ipsa minima a minus provident nisi quasi temporibus possimus, cupiditate libero beatae, unde aliquid voluptas non repudiandae officia nulla?
                </div>
            </div>
            <div className="btnBox flex flex-row justify-end items-center overflow-ellipsis">
                <IoCreate className='icon_style text-white' />
                <MdDelete className='icon_style text-white' />
            </div>
        </div>
    )
}

export default Task;