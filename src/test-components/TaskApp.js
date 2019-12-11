import React, { Component } from 'react';
import TaskForm from './TaskForm';
import Tasks from './Tasks';
import Count from './Count';

class TaskApp extends Component {
    state = {  
        tasks: [
            {
                id: 1,
                title: 'First',
                completed: true,
                edit: false
            },
            {
                id: 2,
                title: 'Second',
                completed: false,
                edit: false
            },
            {
                id: 3,
                title: 'Third',
                completed: false,
                edit: false
            },
            {
                id: 4,
                title: 'Fourth',
                completed: true,
                edit: false
            },
            {
                id: 5,
                title: 'Fifth',
                completed: false,
                edit: false
            }
        ]
    }

    onComplete = (id) => {
        this.setState({ tasks: this.state.tasks.map(task => {
            if (task.id === id) {
                task.completed = !task.completed;
            }
            return task
        })})
    }

    onDelete = (id) => {
        this.setState({tasks: [...this.state.tasks.filter(item => item.id !== id)] })
    }

    addTask = (title) => {
        const newTask = {
            id: Date.now(),
            title,
            completed: false
        }
        this.setState({ tasks: [...this.state.tasks, newTask]});
    }

    onToogleEdit = (id) => {
        this.setState({ tasks: this.state.tasks.map(task => {
            if (task.id === id) {
                task.edit = !task.edit;
            }
            return task
        })})
    }

    onUpdate = (id, title) => {
        this.setState({ tasks: this.state.tasks.map(task => {
            if (task.id === id) {
                task.title = title;
                task.edit = false;
            }
            return task
        })})
    }

    render() { 
        return ( 
            <div className="todo">
                <Count tasks={this.state.tasks}/>
                <TaskForm addTask={this.addTask} onToogleEdit={this.onToogleEdit}/>
                <Tasks tasks={this.state.tasks} onComplete={this.onComplete} onDelete={this.onDelete} onToogleEdit={this.onToogleEdit} onUpdate={this.onUpdate}/>
            </div>
         );
    }
}
 
export default TaskApp;