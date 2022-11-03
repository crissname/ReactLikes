import React, {useState} from 'react';
import './Todo.css'
import TodoHeader from "../TodoHeader/TodoHeader";
import TodoAction from "../TodoActions/TodoAction";
import TodoRender from "../TodoRender/TodoRender";

const initialFormData = {
    isEdit: false,
    todoName: '',
    todoNote: '',
    isFinished: false,
    id: '',
    index: null
}

const Todo = () => {
    const [tab, setTab] = useState(0)
    const [isOpen, setIsOpen] = useState(false)
    const [isOpenDisplayTodo, setIsOpenDisplayTodo] = useState(false)
    const [todos, setTodos] = useState([])
    const [formData, setFormData] = useState(initialFormData)


    const handlerOpenDialogs = () => setIsOpen((prevState)=>!prevState)

    return (
        <div className='todo__wrapper'>
            <TodoHeader/>
            <TodoAction/>
            <TodoRender/>
        </div>
    );
};

export default Todo;
