import React, { Component } from 'react'
import './ToDo.css'

class ToDo extends Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this)
        this.handleRemove = this.handleRemove.bind(this)
        this.toggleComplete = this.toggleComplete.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.toggleForm = this.toggleForm.bind(this)
        this.state = {task: this.props.task, editing: false, complete: false}
    }

    handleChange(evt){
        this.setState({ [evt.target.name]: evt.target.value });
    }

    toggleForm(evt){
        this.setState({editing: !this.state.editing})
    }

    handleEdit(evt){
        evt.preventDefault()
        this.props.edit(this.props.id, this.state.task)
        this.setState({editing: false})
    }

    handleRemove(){
        this.props.remove(this.props.id)
    }

    toggleComplete(){
        this.setState({complete: !this.state.complete})
    }

    render(){
        let classes = "ToDo-Task" + (this.state.complete ? " Completed" : "");
        return(
             this.state.editing ? 
                <form className="ToDo-Form" onSubmit={this.handleEdit}>
                    <input type="text" name="task" onChange={this.handleChange} value={this.state.task} placeholder="New Task"></input>
                    <button>Update</button>
                </form>
                : 
                <li className="ToDo">
                <div className={classes} onClick={this.toggleComplete}>{this.props.task}</div>
                <div className="ToDo-Buttons"><button onClick={this.toggleForm}><i class="fas fa-pen"></i></button>
                    <button onClick={this.handleRemove}><i class="fas fa-trash"></i></button>
                </div>
                </li>
   
            
        )
    }
}

export default ToDo