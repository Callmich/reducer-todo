import React, { useState, useReducer }from 'react';
import Todo from './ToDo';


const ToDoList = (props) => {
    return (
        <div>
            {props.item.map(item => (
                <Todo
                    dispatch={props.dispatch}
                    item={item}
                />
            ))}
        </div>
    )
}

export default ToDoList