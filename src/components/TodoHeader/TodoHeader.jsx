import React from 'react';
import './TodoHeader.css'
import moment from "moment";
import AddCircleIcon from '@mui/icons-material/AddCircle';
import DialodModal from "../Dialog/DialodModal";
import DisplayTodo from "../DisplayToDo/DisplayTodo";

const TodoHeader = ({
                        isOpen,
                        handlerOpenDialogs,
                        handleSetFieldValue,
                        formData,
                        handleSetTodoOnSubmit,
                        isOpenDisplayTodo,
                        handleCloseButton,
                        handleEditTodo,
                        handleRemoveTodo,
                        totalCount
                    }) => {
    const weekDay = moment().format('dddd');
    const date = moment().format('MMMM do YYYY')

    return (
        <div className='todo__header bg-cyan-700'>
            <div className='counter-wrapper'>
                <div className='todos-counter'>
                    <span className='todo-counter-big'>{totalCount.finished}</span>

                    <div className='total'>
                        <span className='task'>Task</span>
                        <span>{`/ ${totalCount.total}`}</span>
                    </div>

                </div>
                <div className='todo-date'>
                    <span>{weekDay}</span>
                    <span>{date}</span>
                </div>
            </div>
            <div className='add-todo' onClick={handlerOpenDialogs}>
                <AddCircleIcon color='primary'/>
                <span className='icon-bg'/>
            </div>
            <DialodModal
                isOpen={isOpen}
                handlerOpenDialogs={handlerOpenDialogs}
                handleSetFieldValue={handleSetFieldValue}
                formData={formData}
                handleSetTodoOnSubmit={handleSetTodoOnSubmit}
            />
            <DisplayTodo
                formData={formData}
                isOpen={isOpenDisplayTodo}
                handleCloseButton={handleCloseButton}
                handleEditTodo={handleEditTodo}
                handleRemoveTodo={handleRemoveTodo}

            />
        </div>
    );
};

export default TodoHeader;
