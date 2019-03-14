import React from 'react';
import Task from './Task.js'

class TaskList extends React.Component {


    constructor(props) {
        super(props); 
    }
    

  

render() {

        return (
            <div>         
            {
                this.props.tasks.map((task, i) => 
                        <Task 
                            taskId={task.id}
                            taskDescription={task.taskDescription} 
                            taskCompleted={task.completed}
                            key={i} 
                            onTaskCompletedHandler={this.props.taskCompletedHandler} 
                            onRemoveTaskHandler={this.props.removeTaskHandler}

                        />
                    )
            }
         </div>
        );
        }

    }

        export default TaskList; 

        
        