import React, {Component} from 'react';
import "./TodoBox.css";
import TodoItem from "../TodoItem/TodoItem";
import TodoBoxInfo from "../TodoBoxInfo/TodoBoxInfo";



class TodoBox extends Component {
    constructor(props){
        super(props);
        this.state = { todos: this.props.todos };
    }
    
    render(){
        let ti = this.props.todos.map( (todoi) => {
            return(
                <TodoItem todoitem={todoi} key={todoi.todo}/>
            )}
        );
        return(
            <div className="todo-box">
                <TodoBoxInfo date={this.props.date} deadline={this.props.deadline} />
                {ti}
            </div>
        );
    }
}

export default TodoBox;