import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {fetchUsers} from "../action-creators/user";
import {useAction} from "../hooks/useAction";

const UserList: React.FC = () => {
    const {users, loading, error} = useTypedSelector(state => state.user)
    const {fetchUsers} = useAction();

    useEffect(() => {
        fetchUsers()
    }, [])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h2>Error { error }</h2>
    }

    return (
        <>
            {users.map( user => <div key={user.id}>{user.name}</div> )}
        </>
    );
};

export default UserList;