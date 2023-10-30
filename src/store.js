import { configureStore } from "@reduxjs/toolkit";

const ADD = "ADD";
const DELETE = "DELETE";

export const addToDo = text => {
    return {
        type: ADD,
        text
    };
};

export const deleteToDo = id => {
    return {
        type: DELETE,
        id
    }
};

const reducer = (state = [], action) => {
    switch (action.type){
        case ADD:
            return [{ text: action.text, id: Date.now() }, ...state];
        case DELETE:
            return state.filter(toDo => toDo !== action.id);
        default:
            return state;
    }
};

const store = configureStore({reducer:reducer});

export default store;