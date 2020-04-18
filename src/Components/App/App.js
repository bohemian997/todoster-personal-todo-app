import React, {Component} from 'react';
import './App.css';
import Header from '../Header/Header';
import TodoBox from '../TodoBox/TodoBox';
import todoMonthData from "../Database/todoMonthData";

class App extends Component {

  render(){
    const tb = todoMonthData.map( (todoobj)=> {
      return(
        <TodoBox key={todoobj.id} date={todoobj.date} deadline={todoobj.deadline} todos={todoobj.todos} />
      )
    });
  
    return (
      <div >
        <div className="text-center">
          <Header/>
        </div>
        <div>
          {tb}
        </div>
      </div>
    );
  }
}

export default App;
