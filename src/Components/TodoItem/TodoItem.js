import React, { Component } from 'react';
import "./todoitem.css";



class TodoItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            todo : this.props.todoitem,
            done : this.props.todoitem.done,
        }
        this.checkboxHandler = this.checkboxHandler.bind(this);
    }

    checkboxHandler(id){
        this.setState( {done : !this.state.done} )
        console.log(this.state.todo, id)
    }
    
    
    render(){
        return(
            <div className="todo-item">
                <button onClick={() => this.checkboxHandler(this.state.todo.key)}>
                    <input type="checkbox" checked={this.state.done} onChange={() => this.checkboxHandler(this.state.todo.key)} name="todo1" />
                    <label htmlFor="todo1" className={this.state.done ? "linethru" : ""}>{this.state.todo.todo}</label>
                </button>
                <hr/>
            </div>
        );
    }
};




export default TodoItem;