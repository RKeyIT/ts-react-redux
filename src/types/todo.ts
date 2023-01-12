export interface TodoState {
    todos: any[];
    loading: boolean;
    error: null | string;
    page: number;
    limit: number;
}
export enum TodoActionTypes {
    FETCH_TODO = "FETCH_TODO",
    FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
    FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
    SET_TODO_PAGE = "SET_TODO_PAGE",
}
export type TodoAction =
    FetchTodoAction
    | FetchTodoActionError
    | FetchTodoActionSuccess
    | SetTodoPageAction

interface FetchTodoAction {
    type: TodoActionTypes.FETCH_TODO;
}
interface FetchTodoActionError {
    type: TodoActionTypes.FETCH_TODO_ERROR;
    payload: string;
}
interface FetchTodoActionSuccess {
    type: TodoActionTypes.FETCH_TODO_SUCCESS;
    payload: any[];
}
interface SetTodoPageAction {
    type: TodoActionTypes.SET_TODO_PAGE;
    payload: number;
}
