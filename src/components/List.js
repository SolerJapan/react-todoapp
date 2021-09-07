import React, { useState, useRef, useEffect } from "react";
import Todo from './Todo';
import TodoForm from './TodoForm';



const List = ({ todos, completeTodo }) => {

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
        </div>
    ));
};



export default List;