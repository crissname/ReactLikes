import React from 'react';
import './TodoHeader.css'
import moment from "moment";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialodModal from "../Dialog/DialodModal";

const TodoHeader = () => {
    const weekDay = moment().format('dddd');
    const date = moment().format('MMMM do YYYY-')

    return (
        <div className='todo__header bg-cyan-700'>
            <div className='counter-wrapper'>
                <div className='todos-counter'>
                    <span className='todo-counter-big'>2</span>

                    <div className='total'>
                        <span className='task'>Task</span>
                        <span>/ 18</span>
                    </div>

                </div>
                <div className='todo-date'>
                    <span>{weekDay}</span>
                    <span>{date}</span>
                </div>
            </div>
            <div className='add-todo'>
                <AddCircleIcon color='primary'/>
                <span className='icon-bg' />
            </div>
            <DialodModal/>
        </div>
    );
};

export default TodoHeader;
