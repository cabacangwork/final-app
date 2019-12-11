import React, { PureComponent } from 'react';

class Count extends PureComponent {
    state = { 
        completed:'',
        active: '' 
    }

    componentDidMount() {
        const completed = this.props.tasks.filter(item => item.completed===true);
        const active = this.props.tasks.filter(item => item.completed!==true);
        this.setState({completed: completed.length, active: active.length});
    }

    componentDidUpdate() {
        const completed = this.props.tasks.filter(item => item.completed===true);
        const active = this.props.tasks.filter(item => item.completed!==true);
        this.setState({completed: completed.length, active: active.length});
    }

    render() { 
        return ( 
            <div className="counter">
                <div className="left">
                    Accomplished<br/>Tasks:
                    <h2>{this.state.completed}</h2>
                </div>
                <div className="right">
                    Active Tasks:
                    <h2>{this.state.active}</h2>
                </div>
            </div>
         );
    }
}
 
export default Count;