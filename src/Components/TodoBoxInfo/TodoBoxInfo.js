import React from "react"
import "./TodoBoxInfo.css"

const TodoBoxInfo = (props) =>{
    return(
        <div className="box inlineblock">
            <p><small id="date"><b>Date : </b>{props.date.toDateString()}</small></p>
            <p><small><b>Status : </b>Pending</small></p>
            <p><small><b>Deadline : </b>{props.deadline}</small></p>
        </div>
    )
}

export default TodoBoxInfo;