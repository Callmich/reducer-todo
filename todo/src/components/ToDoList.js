import React from 'react';
import Todo from './ToDo';

// import Button from '@material-ui/core/Button';


const ToDoList = props => {
    
    return (
        <div>
            <Todo/> {/*need to map through and pass nec props*/}
            <button> 
                Clear Finished Tasks
             </button> {/*need on click to clear */}
        </div>
    )
}

export default ToDoList