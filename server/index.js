import express from "express";
import cors from "cors";
import pool from "./db.js"; 
const app = express();
app.use(cors()); 
// this allow the request that we get from the frontend 
app.use(express.json());


app.post("/todos", async (req, res) => {
    try {
        const { description } = req.body;
        const newTodo = await pool.query(
            "insert into todo (description ) values($1) RETURNING *",
            [description]
        );

        res.json(newTodo.rows[0]);


    }
    catch (error) {
        console.error(error.message);
    }
});

// get  all todos  
app.get("/todos", async (req, res) => {
    try {
        const Todos = await pool.query("SELECT *FROM todo")
        res.json(  Todos.rows)
    } catch (error) {
        console.error(error.message)
    }
})

//  get a todo

app.get("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);
        res.json(todo.rows[0]);
        console.log(req.params);
    } catch (error) {
        console.error(error.message);
    }
});

// update todo
app.put("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const { description } = req.body;
        const updateTodos = await pool.query(
            "UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]
        );
        res.json("todo was updated")
    } catch (error) {
        console.error(error.message)
    }
})

// delete a todo
app.delete("/todos/:id", async (req, res) => {
    try {
        const { id } = req.params
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);
        res.json("todo is deleted")
    } catch (error) {
        console.error(error.message)

    }
})
const PORT = 2025
app.listen(PORT, () => {
    console.log(`sever is on port ${PORT}`);
});
