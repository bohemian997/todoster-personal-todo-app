import React, {Component} from "react";
import './header.css';

class Header extends Component{
    render(){
            return(
            <div className="text-center head">
                <h1>ToDoIst</h1>
                <h3>Monthly Todo Clander</h3>
            </div>
        )
    };
}

export default Header;