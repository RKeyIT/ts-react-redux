export type UserAction = FetchUserAction | FetchUserActionError | FetchUserActionSuccess;
export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
}
export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
}

interface FetchUserAction {
    type: UserActionTypes.FETCH_USERS;
}
interface FetchUserActionError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}
interface FetchUserActionSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[];
}