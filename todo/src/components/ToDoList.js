import React, { useState, useReducer }from 'react';
import Todo from './ToDo';

import { stateReducer, initialState } from '../reducers/StateReducer'

// import Button from '@material-ui/core/Button';

const ToDoList = props => {
    const [state, dispatch] = useReducer(stateReducer, initialState);
    console.log(state);
    
    return (
        <div>
            {state.map(task => (
                <Todo
                    key={task.id}
                    item={task.item}
                />
            ))}
            
            <button> 
                Clear Finished Tasks
             </button> {/*need on click to clear */}
        </div>
    )
}

export default ToDoList