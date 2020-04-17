import React from 'react';
import "./todoitem.css"

const TodoItem = (props) => {
    
    return(
        <div className="todo-item">
            <button>
                <input type="checkbox" name="todo1" />
                <label for="todo1">{props.todo}</label>
            </button>
            <hr/>
        </div>
    )
};

export default TodoItem;