import React from 'react';
import TaskList from './TaskList';

class NumberTasks extends React.Component {

    constructor(props) {
     super(props);


    this.state={

    tasksRemaining:0
        };
    }

AddTaskCounter(){

//need to set the state of the tasks left to tasks in list
let tasksLeft = this.state.tasks;

// need to get the length of the tasks array (.length)
let tasksRemaining = tasksLeft.length; 
 

// Set state of the tasks remaining into tasks?
this.setState({tasks:tasksRemaining})
}

    render() {
      // tasks remaining should be the length of the array/number in the list. 

        return (<p1 style={styles.tasksNumber}>Tasks to be done: {this.state.tasks} </p1>);
    }
}

const styles= {

    tasksNumber:{
    marginLeft:"auto",
    mrginRight:"auto",
    color: "green",
    fontFamily: "Arial, Helvetica,serif",
    fontSize:"30px",
    fontWeight:"bold"
    
     }

          
    };


export default NumberTasks;
    