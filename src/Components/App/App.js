import React from 'react';
import './App.css';
import Header from '../Header/Header'
import TodoBox from '../TodoBox/TodoBox'
import todoMonthData from "../Database/todoMonthData"

function App() {

  const tb = todoMonthData.map( (todoobj)=> {
    return(
      <TodoBox key={todoobj.id} date={todoobj.date} deadline={todoobj.deadline} todos={todoobj.todo} />
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

export default App;
