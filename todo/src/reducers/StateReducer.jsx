

export const initialState = [{
    item: 'Learn about Reducers',
    completed: false,
    id: 3892987589
}];

export const stateReducer = (state, action) => {
    switch(action.type){
        case 'ADD_TASK':
            const newTask ={
                item: action.payload,
                completed: false,
                id: new Date()
            }
            return {
                ...state.push(newTask) 
            }

        // case 'FINNISH_TASK':
        //     return {
        //         ...state,
        //         completed: !completed
        //     }
            
        default:
            return initialState;
}
}