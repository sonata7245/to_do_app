import React, { Component } from 'react'
import './NewToDoForm.css'

class NewToDoForm extends Component{
    constructor(props){
        super(props);
        this.state = {task: ""}
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleSubmit(e){
        e.preventDefault()
        this.props.createTask(this.state)
        this.setState({task: ""})
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }

    render(){
        return (
            <form className="NewToDoForm" onSubmit={this.handleSubmit}>
                <label htmlFor='task'>New ToDo:</label>
                <input type="text" name="task" onChange={this.handleChange} value={this.state.task} placeholder="New Task"></input>
                <button>Add To Do</button>
            </form>
        )
    }
}

export default NewToDoForm