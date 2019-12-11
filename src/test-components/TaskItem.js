import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TaskItem extends Component {

    render() { 
        const { onComplete, task, onDelete, onToogleEdit } = this.props;
        return ( 
            <>
                <div className="left">
                    <input type="checkbox" checked={task.completed} onChange={(e) => onComplete(task.id)}/>
                    <span className={task.completed? `title completed`: `title`}>{task.title}</span>
                </div>
                <div className="right">
                    <button onClick={(e) => onToogleEdit(task.id)} className="edit">Edit</button>
                    <button onClick={(e) => onDelete(task.id)} className="delete">Delete</button>
                </div>
            </>
         );
    }
}

TaskItem.proptypes = {
    task: PropTypes.object.isRequired
}
 
export default TaskItem;