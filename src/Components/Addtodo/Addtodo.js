import React, {Component} from 'react';
import "./Addtodo.css";

export default class Addtodo extends Component{

    constructor(props){
        super(props)

        this.state = {
            month : "",
            date : "",
            deadline: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.createdays = this.createdays.bind(this)
    }

    createdays(days, num){
        for(let index=1; index <= num; index++){ 
            days.push(index);
        }
    }

    handleChange(event){
        console.log(this);
        const {name, value} = event.target
        this.setState({ [name] : value})
    }

    render(){
        const {title, name, placeholder} = this.props;
        const months = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];
        let days = [];
        return(
            <div className="p-3">
                <div style={{margin : "5px"}}>
                    <h4 style={{display : "inline"}}>{title} : </h4>
                    <input className="input" name={name} type="text" placeholder={placeholder}/>
                    <label htmlFor={name}></label>
                </div>
                
                <br/>

                <div style={{margin : "5px"}}>
                    <h4 style={{display : "inline"}}>Date ( mm / dd ) : </h4>
                    <select name="month" id="1" value={this.state.month} onChange={this.handleChange}>
                        {months.map((val) => {return <option key={val} value={val}> {val} </option>})}
                    </select>
                
                    <select name="date" id="2" value={this.state.date} onChange={this.handleChange} >
                        {this.state.month === "Feb" ? this.createdays(days, 28) : this.createdays(days, 31)}
                        {days.map( (val)=> {return <option key={val} value={val}> {val} </option>})}
                    </select>
                </div>

                <br/>
                
                <div style={{margin : "5px"}}>
                    <h4 style={{display : "inline"}}>Deadline ( days ) : </h4>
                    <select name="deadline" id="1" value={this.state.deadline} onChange={this.handleChange}>
                    {days.map( (val)=> {return <option key={val + "deadline"} value={val}> {val} </option>})}
                    </select>
                </div>
                <button>Add This Todo</button>
            </div>
        )
    }
}