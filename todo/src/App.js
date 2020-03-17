import React, { useState, useReducer } from 'react';
import {stateReducer, initialState } from './reducers/StateReducer';
import ToDoList from './components/ToDoList';
import './App.css';


function App() {
  const [item, dispatch] = useReducer(stateReducer, initialState);
  const [newTask, setNewTask] = useState('')

  const handleChanges = e => {
    setNewTask(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault();
    setNewTask('')
}

  return (
    <div className="App">
      <h1>ToDo App 2.0</h1>
      <form onSubmit={handleSubmit}>
        <input
            type="text"
            name="item"
            value={newTask}
            onChange={handleChanges}
        />
        <button onClick={() => dispatch({ type: 'ADD_TASK', payload: newTask })} type='submit'>Add</button>
        <ToDoList item={item} dispatch={dispatch}/>
        <button onClick={() => dispatch({ type: 'CLEAR', payload: newTask })}>Clear Finished Tasks</button>
      </form>
    </div>
  );
}

export default App;
