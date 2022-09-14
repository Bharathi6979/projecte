import React, { Component } from "react";

class Map extends Component{

    state ={
        users :[
            {
                "userid": 1,
                "id":1,
                "title":"Breakfast",
                "compeleted":false
            },
            {
                "userid":1,
                "id":2,
                "title":"lunch",
                "completed":false
            },
            {
                "userid":1,
                "id":3,
                "title":"dinner",
                "completed":true
            },
            

        ]
    }


    render(){
        return(
            <div>
                <h1>hi sai</h1>
                {this.state.users.map(food => food.title)}
            </div>
        )
    }
}
export default Map