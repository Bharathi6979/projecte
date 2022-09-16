import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { AiFillDelete } from 'react-icons/ai';

function Todo (){
    var noid = uuidv4();

    console.log("iddd:::", noid);

    const [input,setInput]=useState("")

    const [todolist,setTodolist]=useState([
        {id: 1,task:"drink water"},
        {id: 2,task:"walking"},
        {id: 3,task:"fresh"},
        {id: 4,task:"break fast"},
        {id: 5,task:"login"}
    ]);
    const handlechange = (e) =>{
        setInput(e.target.value)
    }
    const addtodo = () =>{
        setTodolist([...todolist,{id:noid,task:input}])

        setInput('')

    }

    return(
        <div>
            <h1>Today todo list</h1>
            <label className="me-4">Task</label>
            <input value={input} onChange={handlechange}/>
            <button onClick={addtodo} className="btn btn-primary ms-4">Add todo</button>

            {todolist.map(r =>
            <div key={r.id}>
                 <h3 className="ms-4">{r.task}</h3>
                 <button><AiFillDelete/></button>

            </div>)}




            
        </div>
    )
}
export default Todo