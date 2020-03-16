

export const initialState = [{
    item: 'Learn about Reducers',
    completed: false,
    id: 3892987589
},];

export const stateReducer = (state, action) => {
    state = {...initialState}
    return state;
}