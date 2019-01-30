import React from 'react';
import Task from './Task.js'

class TaskList extends React.Component {


    constructor(props) {
        super(props);
        
        this.taskCompleted=this.taskCompleted.bind(this);
        this.removeTaskFromList=this.removeTaskFromList.bind(this);
  
            this.state = {
             tasks:[],
             
             
            }      
        }
      
      
    taskCompleted() {
    //alert( 'Well done, one down!');
    //}
    //set the state,cannot assign to a variable? 
    this.state.tasks

     //if onClick of the 'done' button, get the task with task id and turn the task text green. 
     
     let doneTaskList = documnet.getElementById("task").style.textColor="green";
     
     //and change this styling from the Task.js to turn the task description/value green/line through 
    
    this.setState({tasks:doneTaskList})
    }
    
    
    
    removeTaskFromList() {
    //alert('Handling working');

     let currentListOfTasks = this.state.tasks;

    // takes a current list, and looks at each task to check if id's don't match, if they dont match then it gets kept on the list, if they match it removes then from the array?
    // dont fully understand the key part and how to reference it properly in the function. 
    
    let filteredTaskList = currentListOfTasks.filter((task)=> key !== task.key);

    //EXAMPLE FROM BOOKSHOP:let bookAlreadyInBasket = currentBasket.filter((bookInBasket) => bookInBasket.isbn == book.isbn).length > 0;

    this.setState({tasks:filteredTaskList});
 
    };

render() {

        return (
            <div>         
            {
                this.props.tasks.map((task, i) => 
                        <Task id="task" taskDescription={task.description} key={i} onTaskCompletedHandler={this.taskCompleted} 
                        onRemoveTaskHandler={this.removeTaskFromList}/>
                    )
            }
         </div>
        );
        }

    }

        export default TaskList; 

        