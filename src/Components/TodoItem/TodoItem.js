import React, { Component } from 'react';
import "./todoitem.css"

class TodoItem extends Component{
    
    render(){
        return(
            <div className="todo-item">
                <button>
                    <input type="checkbox" name="todo1" />
                    <label for="todo1">{this.props.todo}</label>
                </button>
                <hr/>
            </div>
        )
    }
};

export default TodoItem;