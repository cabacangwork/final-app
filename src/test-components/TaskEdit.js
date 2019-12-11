import React, { Component } from 'react';

class TaskEdit extends Component {

    state = {
        title:''
    }

    componentDidMount() {
        this.setState({title:this.props.task.title})
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    updateTask = (e) => {
        e.preventDefault();
        this.props.onUpdate(this.props.task.id, this.state.title);
    }

    render() { 
        const { task, onToogleEdit, onUpdate } = this.props;
        const { title } = this.state;
        return ( 
            <>
                {task.edit && 
                    <div className="edit-wrapper">
                        <form onSubmit={this.updateTask}>
                            <input type="text" name="title" value={title} onChange={this.onChange} required/>
                            <button type="submit" className="update" >Update</button>
                        </form>
                        <button onClick={(e) => onToogleEdit(task.id)}>Cancel</button>
                    </div>
                }
            </>
         );
    }
}
 
export default TaskEdit;