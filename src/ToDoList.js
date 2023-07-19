import React, { Component } from 'react'
import NewToDoForm from './NewToDoForm'
import ToDo from './ToDo'
import {v4 as uuidv4} from 'uuid';
import './ToDoList.css'

class ToDoList extends Component{
    constructor(props){
        super(props);
        this.state = {
            ToDos: [{id:uuidv4(), task:"Get this app done", complete: false}]
        }
        this.addTask = this.addTask.bind(this)
        this.removeTask = this.removeTask.bind(this)
        this.editTask = this.editTask.bind(this)
    }

    addTask(task){
        let newTask = {...task, id: uuidv4(), complete: false, editing: false};
        this.setState(state =>({
            ToDos: [...state.ToDos, newTask]
        }))
    }

    editTask(id, task){
        let editedTask = this.state.ToDos.filter(todo => todo.id === id)
        
        editedTask[0].task = task;
        
        const oldTodos = this.state.ToDos.filter(todo => todo.id !== id)
        this.setState({
            ToDos: [...oldTodos, editedTask[0]],
        })

        
    }

    removeTask(id){
        console.log(id)
        this.setState({
            ToDos: this.state.ToDos.filter(todo => todo.id !== id)
        });
    }


    render(){
        return (
            <div className="ToDoList">
                <h1>ToDo List<span>A Simple React ToDo List App</span></h1>
                <div className="ToDoList-Line">
                <ul>{this.state.ToDos.map((task) => <ToDo key={task.id} id={task.id} task={task.task} edit={this.editTask} remove={this.removeTask} complete={task.complete} completeTask={this.completeTask}/>)}</ul>
                </div>
                <NewToDoForm createTask={this.addTask} />
            </div>
        )
    }
}

export default ToDoList
