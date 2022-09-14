import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Api (){
    const[todos,setTodos] = useState([])
    
    const abc = () =>{
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(data => setTodos(data))
    }
    useEffect(() =>{
     abc()
    }, [])
    return(
        <div>
            {todos.map(t =><div>
               
               <h1>{t.title}</h1>
              <p> {t.id}</p>
                
            </div>)}
            
        </div>
    )
}
export default Api