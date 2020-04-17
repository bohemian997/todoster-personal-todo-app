import React from 'react';
import "./TodoBox.css";
import TodoItem from "../TodoItem/TodoItem"
import TodoBoxInfo from "../TodoBoxInfo/TodoBoxInfo"



const TodoBox = (props) => {
    let ti = props.todos.map( (todo) => {
        return(
            <TodoItem todo ={todo} key={todo}/>
        )}
    )
    return(
        <div className="todo-box">
            <TodoBoxInfo date={props.date} deadline={props.deadline} />
            {ti}
        </div>
    )
}

export default TodoBox;