

export const initialState = [{
    item: 'Learn about Reducers',
    completed: false,
    id: 3892987589
}];

export const stateReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK':
            return[
                ...state,
                {
                    item: action.payload,
                    completeled: false,
                    id: new Date()
                }
            ];
        case 'TOGGLE':
            return state.map(newTask =>
                newTask.id === action.payload.id ? { ...newTask, completed: !newTask.completed} : newTask)
        case 'CLEAR':
            return state.filter(todo =>
                !todo.completed
                )

        default:
            return state;
}
}