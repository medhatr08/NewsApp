import React, { Component } from "react";
import loading from '../assets/images/frame-1.png'
class Spinner extends Component{
    render(){
        return (
            <div >
                <img src={loading} alt={loading}/>
            </div>

        )
    }
}
export default Spinner