import React from 'react';
import Task from './Task.js'

class TaskList extends React.Component {




   
    render() {

        return (

           <div>         
            {        this.props.tasks.map((task, i) => 
                        <Task taskDescription={task.description} key={i} />
                    )
            }
                </div>

                    );






        }
    }

        export default TaskList; 