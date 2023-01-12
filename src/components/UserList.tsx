import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useDispatch} from "react-redux";
import {fetchUsers} from "../action-creators/user";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(fetchUsers())
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h2>Error { error }</h2>
    }

    return (
        <div>
            {users.map( user => <div key={user.id}>{user.name}</div> )}
        </div>
    );
};

export default UserList;