import React from "react";
import { Component } from "react";
import './birthday.css'

class Birthday extends Component{

    state ={
        reviews:[
            {
              id: 1,
              name: 'Bertie Yates',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
            },
            {
              id: 2,
              name: 'Hester Hogan',
              age: 32,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
            },
            {
              id: 3,
              name: 'Larry Little',
              age: 36,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
            },
            {
              id: 4,
              name: 'Sean Walsh',
              age: 34,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
            },
            {
              id: 5,
              name: 'Lola Gardner',
              age: 29,
              image:
                'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
            },
          ]
    }
    render(){
        return(
            <div className="bh">
                <h1 className="con">{this.state.reviews.length} Birthday Today</h1>
                {this.state.reviews.map(r=>
                    <div className="con" key={r.id}>
                    <img className="bdi" src={r.image}/>
                    <h3>{r.name}</h3>
                    <h4>{r.age}years</h4>
                </div>)}
                <div className="bt">
                <button className="btn btn-primary">Clear all</button>
                </div>



            </div>
        )
    }
}
export default Birthday