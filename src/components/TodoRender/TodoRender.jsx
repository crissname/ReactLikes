import React from 'react';
import './TodoRender.css'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Checkbox from '@mui/material/Checkbox';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const Todo = ({
                  todo,
                  handleMarjTodo,
                  index,
                  handleOpenTodo
              }) => {

    const isFinishedTodo = todo.isFinished && 'todo__finished';

    return (
        <div className='todo__container'>
        <span>
            <Checkbox
                icon={<RadioButtonUncheckedIcon/>}
                checkedIcon={<CheckCircleOutlineIcon/>}
                onClick={(e: any) => handleMarjTodo(e.target.checked, index)}
                checked={todo.isFinished}
            />
        </span>
            <div className='todo__item'
            onClick={()=> {handleOpenTodo({...todo,index})}}>
                <span className={isFinishedTodo}>{todo.todoName}</span>
                <ArrowForwardIosIcon fontSize='small' className='todo__arrow'/>
            </div>

        </div>
    )
}

const TodoRender = ({todos, handleMarjTodo,handleOpenTodo}) => {
    return (
        <div className='todos_wrapper'>
            {todos.map((todo, index) => (
                <Todo
                    key={todo.id}
                    todo={todo}
                    handleMarjTodo={handleMarjTodo}
                    index={index}
                    handleOpenTodo={handleOpenTodo}
                />
            ))}
        </div>
    );
};

export default TodoRender;
