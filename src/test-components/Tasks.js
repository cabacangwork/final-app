import React, { Component } from 'react';
import TaskItem from './TaskItem';
import TaskEdit from './TaskEdit';
import PropTypes from 'prop-types';

class Tasks extends Component {

    render() { 
        const { onComplete, onDelete, onToogleEdit, onUpdate } = this.props;
        return ( 
            <>
                {this.props.tasks.map((task) => 
                    <div className="tasksList" key={task.id}>
                        <TaskItem task={task} onComplete={onComplete} onDelete={onDelete} onToogleEdit={onToogleEdit}/>
                        <TaskEdit task={task} onToogleEdit={onToogleEdit} onUpdate={onUpdate}/>
                    </div>
                )}
            </>
         );
    }
}

// PropTypes
Tasks.propTypes = {
    tasks: PropTypes.array.isRequired
}
 
export default Tasks;