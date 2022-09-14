import React, { Component } from "react";

class Voting extends Component{
    state ={
        count:0,
        
    }
    handleincrement = () =>{
        this.setState({count:this.state.count+1})
    }
    
    render(){
        return(
            <div>
                <h1>FOOD</h1>
                <h2>{this.props.lang}</h2>
                <p>count:{this.state.count}</p>
                <h2>price 120rs</h2>
                <button onClick={this.handleincrement}>Add</button>
                <button>Buy</button>
                
            

            </div>
        )
    }
}
export default Voting