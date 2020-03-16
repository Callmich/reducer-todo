import React, { useState, useReducer } from 'react';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';

import { stateReducer, initialState } from '../reducers/StateReducer'

//need state, handle changes, and handle  submit

const ToDoForm = props => {
    const [state, dispatch] = useReducer(stateReducer, initialState);
    console.log(state);
    const [newTask, setNewTask] = useState('')

    const handleChanges = e => {
        setNewTask(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault();
        dispatch({ type: 'ADD_TASK', payload: newTask})
        console.log('sumbit',state)
    }
    
    return (
        <form>
            <input
                type="text"
                name="item"
                value={newTask}
                onChange={handleChanges}
            />
            <button onClick={handleSubmit}type='submit'>Add</button>
        </form>
    )
}

export default ToDoForm