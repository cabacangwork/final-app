import React, { Component } from 'react';
import "./style.scss";

class TaskForm extends Component {
    state = {  
        title: '',
    }
    
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    createTask = (e) => {
        e.preventDefault();
        this.props.addTask(this.state.title);
        this.setState({title: ''});
    }

    render() { 
        const { title } = this.state;
        return (
            <form className="addTodo" onSubmit={this.createTask}>
                <input type="text" name="title" value={title} onChange={this.onChange} required/>
                <button type="submit">Submit</button>
            </form>
          );
    }
}
 
export default TaskForm;