import React, { Component } from "react";

class Accordionchild extends Component{
    state ={
        showinfo:false
    }
    taggle = () =>{
        this.setState({showinfo:!this.state.showinfo})
    }
    
    render(){
        return(
            <div>
                <h3>{this.props.title}
                </h3>

                <button onClick={this.taggle}>{this.state.showinfo?"-":"+"}</button>
               {this.state.showinfo && <p>{this.props.info}</p>}

            </div>
        )
    }
}
export default Accordionchild