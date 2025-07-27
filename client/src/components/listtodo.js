import React, { Fragment, useEffect, useState } from "react";
import Edittodos from "./edittodo";

const Listtodo = () => {
    const [todos, setTodos] = useState([]);

    const deleteTodo = async (id) => {
        try {
            const deleteTodo = await fetch(`http://localhost:2025/todos/${id}`, {
                method: "DELETE"

            })
            setTodos(todos.filter(todo=>todo.todo_id !== id))
            // console.log(deleteTodo)

        }  catch (error) {
        console.error(error.message)
    }
}

const getTodos = async () => {
    try {
        const response = await fetch("http://localhost:2025/todos");
        const jsonData = await response.json();
        setTodos(jsonData);
    } catch (error) {
        console.error(error.message)
    }
};
useEffect(() => {
    getTodos();
}, []);
console.log(todos)
return <Fragment>
    <table class="table">
        <thead>
            <tr>
                <th>description</th>
                <th>Edit</th>
                <th>delete</th>
            </tr>
        </thead>
        <tbody>
            {/*<tr>
                    <td>John</td>
                    <td>Doe</td>
                    <td>john@example.com</td>
                </tr> */}
            {todos.map(todo => (
                <tr key={todo.todo_id}>
                    <td>
                        {todo.description}

                    </td>
                    <td><Edittodos/></td>
                    <td><button className="btn btn-danger" onClick={() => deleteTodo(todo.todo_id)}>delete</button></td>
                </tr>
            ))}


        </tbody>
    </table>

</Fragment>
}
export default Listtodo;