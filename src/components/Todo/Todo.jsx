import React from 'react';
import './Todo.css'
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAction from "../TodoActions/TodoAction";
import TodoRender from "../TodoRender/TodoRender";


const Todo = () => {
    return (
        <div className='todo__wrapper'>
            <TodoHeader />
            <TodoAction />
            <TodoRender />
        </div>
    );
};

export default Todo;
