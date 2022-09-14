import React, { Component } from "react";

class Form extends Component{
    state ={
        Name:"",
        Age :"",
        Phone:"",
        Email:"",
        onsubmit : false,
        password:"",
        confirmpassword:""
    }
    handle = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }
    handlechange = () => { 
        
        if(!this.state.Name){
            alert("Name mandortary")
        }
        else{
            this.setState({onsubmit:true})
        }
    }
    // handlephone = (e) => {
    //     this.setState({Phone:e.target.value})
    // }
    // handleemail = (e) => {
    //     this.setState({Email:e.target.value})
    // }
    // handleage = (e) => {
    //     this.setState({Age:e.target.value})
    // }


    render(){
        return(
            <div>
                {! this.state.onsubmit && <div>
                <h1>Registration Form</h1>
                <br/>

                <label>Name</label>
                <input name="Name" value={this.state.Name} onChange={this.handle}/><br/>
                <label>Phone number</label>
                <input name="Phone" value={this.state.Phone} onChange={this.handle}/><br/>
                <label>Email</label>
                <input name="Email" value={this.state.Email} onChange={this.handle}/><br/>
                <label>Age</label>
                <input name="Age" value={this.state.Age} onChange={this.handle}/><br/>

                <label>Password</label>
                <input name="password" value={this.state.password} onChange={this.handle}/><br/>

                <label>confirmpassword</label>
                <input name="confirmpassword" value={this.state.confirmpassword} onChange={this.handle}/><br/>



                <button onClick={this.handlechange} className="btn btn-primary">Submit</button> </div> }
                

               { this.state.onsubmit && <div> <h2>My Detail</h2>
                <h2>My name{this.state.Name}</h2>
                <h2>My no {this.state.Phone}</h2>
                <h2>My age{this.state.Age}</h2>
                <h2>My email{this.state.Email}</h2> </div>}

            </div>
        )
    }
} 
export default Form