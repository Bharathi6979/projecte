import React, { Component } from "react";
import Virat from "../Virat/Virat";
import "./sachin.css"
import sachin from "./sac.jpg"


class Sachin extends Component{
    state ={
        score:100,
        age  :52
    }
    render(){
        return(
            <div>
                <img src={sachin}/>
                <h1 className="hh">Sachin 10</h1>
                <h2>score{this.state.score}</h2>
                <h2>age{this.state.age}</h2>
                <Virat/>
            </div>
        )
    }
}
export default Sachin