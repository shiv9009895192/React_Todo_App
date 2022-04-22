import React from 'react'
import { HiOutlineDocumentText } from "react-icons/hi";
import { FaTrash } from 'react-icons/fa';
import { MdModeEdit } from 'react-icons/md';


export default function Todos() {






    return (
        <div>
            <div className='container my-3'>
                <p className='TodoInput'>TodoInput</p>
                <form className='AddTodo'>
                   <input className='input' type="text" id="title" /><br /><br />
                    <button type="submit"  className="addbtn">Add Todo</button>
                </form>
            </div>

            <div className='container' >
                <h4 className='todolist'>Todos List</h4>
                <div >
                    <div className='Allbtn' >
                        <button className="All" >All</button>
                        <button className="All">Done</button>
                        <button className="All">Todo</button>
                    </div>
                </div><br />
            </div>

            <div className='container'>
                <div className='row'>
                    <div className='col-lg-4'>
                        <p className='todotext'>your text here</p>
                    </div>
                    <div className='col-lg-8'>
                        <div className='iconbtn'>
                            <input className='checkbox ' type='checkbox'></input>
                            <button className="btn btn-white"><MdModeEdit style={{ color: 'orange' }} /></button>
                            <button className="btn btn-white"><FaTrash style={{ color: 'red' }} /></button>
                        </div>
                    </div>
                </div>  
            </div>


            <div className='footer'>
                <button className='deletedonetask' >Delete done task</button>
                <button className='deletedonetask' >Delete all task</button>
            </div>

        </div>
    )
}
