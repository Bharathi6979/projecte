import React, { Component } from "react";
import Sachin from "../Sachin/Sachin";

import "./dhoni.css"
import dhoni from "./ind.webp"


class Dhoni extends Component{
    state ={
        score:66,
        age  :42
    }
    render(){
        return(
            <div> 
                <div className="cards">
    
                <img src={dhoni}/>
                </div>

                 <div className="title">
                <h1>Dhoni 7</h1>
                </div>

                <div className="des">
                <h2>score{this.state.score}</h2>
                <h2>age{this.state.age}</h2>
                </div>
                
                <Sachin/>
            </div>
        )
    }
}
export default Dhoni