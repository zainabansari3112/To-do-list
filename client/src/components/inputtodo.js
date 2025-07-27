import React, { Fragment, useState } from "react";


const Inputtodo = () => {
    const [description, setdescription] = useState("")
    const onSubmitForm = async e =>{
        e.preventDefault();
        try {
            const body = {description};
            const response = await fetch("http://localhost:2025/todos",{
            method: "POST",
            headers: {"content-Type": "application/json"},
            body: JSON.stringify(body),
            });
            console.log(response)
            window.location ="/";
        } catch (error) {
            console.error(error.messeage)
            
        }
    }


    return (
        <Fragment>
            <h1 className="text-center mt-5">pern Todo list</h1>
            <form className="d-flex mt-5 justify-content-center " onSubmit={onSubmitForm}>
                <input type="text" className="form-control" value={description} onChange={e => setdescription(e.target.value)} ></input>
                <button className="btn btn-warning  btn-lg">Add</button>
            </form>

        </Fragment>
    )
};
export default Inputtodo;