import React from 'react';
import Task from './Task.js'

class TaskList extends React.Component {
    constructor(props) {
        super(props);

    
    render() {


        return (
            
           <div id="myTasks">         
            {        this.props.tasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} removeTaskHandler={this.props.removeTaskHandler}/>
                    )
            }
                </div>
            
                    );
                
                


                

        }
    }
    
        export default TaskList;