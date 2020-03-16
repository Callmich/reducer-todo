import React, { useState } from 'react';
// import Button from '@material-ui/core/Button';
// import Input from '@material-ui/core/Input';


//need state, handle changes, and handle  submit

const ToDoForm = props => {
    return (
        <form>
            <input
                type="text"
                name="item"
                // value={state.item}
                // onChange={handleChanges}
            />
            <button type='submit'>Add</button>
        </form>
    )
}

export default ToDoForm