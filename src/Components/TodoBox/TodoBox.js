import React, {Component} from 'react';
import "./TodoBox.css";
import TodoItem from "../TodoItem/TodoItem"
import TodoBoxInfo from "../TodoBoxInfo/TodoBoxInfo"



class TodoBox extends Component {
    render(){
        let ti = this.props.todos.map( (todo) => {
            return(
                <TodoItem todo ={todo} key={todo}/>
            )}
        )
        return(
            <div className="todo-box">
                <TodoBoxInfo date={this.props.date} deadline={this.props.deadline} />
                {ti}
            </div>
        )
    }
}

export default TodoBox;