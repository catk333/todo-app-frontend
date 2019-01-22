import React, { Component } from 'react';
import Header from './Components/Header.js';
import SubHeading from './Components/SubHeading.js';
import NumberTasks from './Components/NumberTasks.js';
import './App.css'
import TaskList from './Components/TaskList.js';
import TaskEntry from './Components/TaskEntry.js';
import Task from './Components/Task.js';

class App extends Component {

  constructor(props) {
    super(props);


    this.addTask = this.addTask.bind(this);
    this.removeTaskFromList=this.removeTaskFromList.bind(this);
    this.addTaskCounter=this.addTaskCounter.bind(this);


    this.state = {
      tasks:[]
      
  };
}
    
  addTask(task) {
    let currentListOfTasks = this.state.tasks;

    currentListOfTasks.push(task);

    this.setState({tasks:currentListOfTasks});
  }
  
  
  removeTaskFromList(){
    alert('Hello- you clicked remove!');
}
 
    //let currentListOfTasks = this.state.tasks;

    // use filter method to remove any books that are not matching the same taskDescription, and return the array - the task entered. 
    //let newTaskList = currentListOfTasks.filter((tasks)=> tasks.description !== tasks.description);


    //this.setState({tasks:newTaskList});
 //};
  
 addTaskCounter() {

  //need to set the state of the tasks left to tasks in list
  let tasksLeft = this.state.tasks;
  
  // need to get the length of the tasks array (.length)
  let tasksRemaining = tasksLeft.length; 
   
  
  // Set state of the tasks remaining into tasks?
  this.setState({tasks:tasksRemaining})
  };


  render() {
    return (
      <div className="container">
        <Header />
        
        <TaskEntry tasks onSaveTaskHandler={this.addTask} /> 
        <br/> 
       <SubHeading/>
       <br/>
       <NumberTasks tasks={this.state.tasks} taskCounterHandler={this.addTaskCounter}/>
       <br/> <br/>
      <TaskList tasks= {this.state.tasks}/>
      <Task tasks={this.state.tasks} onRemoveTaskHandler={this.removeTaskFromList}/>
         </div>
    );
  }

}
export default App;

