import React, {useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";

const TodoList: React.FC = () => {
    const {todos, loading, error, page, limit} = useTypedSelector(state => state.todo)

    const { fetchTodos, setTodoPage } = useAction()

    // hardcode count of pages (here can be math operation);
    const pages = [1, 2, 3, 4, 5]

    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])

    if(loading) {
        return <h1>Loading...</h1>
    }
    if (error) {
        return <h2>Error { error }</h2>
    }

    return (
        <>
            {todos.map(todo => <div key={todo.id}>{todo.id} - {todo.title}</div>)}
            <div style={{display: "flex"}}>
            {pages.map(p => {
                return <div
                        onClick={() => setTodoPage(p)}
                        key={Math.random() * 10000}
                        style={{border: p === page
                                ? "2px solid darkred"
                                : "1px solid black",
                            padding: 10,
                        }}
                    >
                        {p}
                    </div>
                })}
            </div>
        </>
    );
};

export default TodoList;