import {TodoAction, TodoActionTypes, TodoState} from "../../types/todo";

const InitialState: TodoState = {
    todos: [],
    error: null,
    page: 1,
    limit: 10,
    loading: false,
}

export const todoReducer = (state = InitialState, action: TodoAction): TodoState => {
    switch (action.type) {
        case TodoActionTypes.FETCH_TODO:
            return {...state, loading: true}
        case TodoActionTypes.FETCH_TODO_ERROR:
            return {...state, loading: false, error: action.payload}
        case TodoActionTypes.FETCH_TODO_SUCCESS:
            return {...state, loading: false, todos: action.payload}
        case TodoActionTypes.SET_TODO_PAGE:
            return {...state, page: action.payload}
        default:
            return state
    }
}