import React, {Component} from "react"
import "./TodoBoxInfo.css"

class TodoBoxInfo extends Component{
    render(){
        return(
            <div className="box inlineblock">
                <p><small id="date"><b>Date : </b>{this.props.date.toDateString()}</small></p>
                <p><small><b>Status : </b>Pending</small></p>
                <p><small><b>Deadline : </b>{this.props.deadline}</small></p>
            </div>
        )
    }
}

export default TodoBoxInfo;