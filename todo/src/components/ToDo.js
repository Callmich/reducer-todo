import React from 'react';


const ToDo = props => {
    return (
        <div
            className= {`item ${props.item.completed ? 'completed' : '' }`}
            style={{ textDecoration: props.item.completed ? "line-through":""}}
            onClick={() => props.dispatch({ type: 'TOGGLE', payload: props.item })}
        >
            <h4>{props.item.item}</h4>
        </div>
    )
}

export default ToDo;