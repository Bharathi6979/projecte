import React, { Component } from "react";
import virat from "./rcb.jpg"
import "./virat.css"
class Virat extends Component{
    state ={
        score:88,
        age  :32
    }
    render(){
        return(
            <div>
                <img src={virat}/>
                <h1 className="hh">Virat 18</h1>
                <h2>score{this.state.score}</h2>
                <h2>age{this.state.age}</h2>
            </div>
        )
    }
}

export default Virat