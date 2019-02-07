import React, { Component } from 'react';
import Header from './Components/Header.js';
import SubHeading from './Components/SubHeading.js';
import NumberTasks from './Components/NumberTasks.js';
import './App.css'
import TaskList from './Components/TaskList.js';
import TaskEntry from './Components/TaskEntry.js';

class App extends Component {

  constructor(props) {
    super(props);


    this.addTask = this.addTask.bind(this);
    this.addTaskCounter=this.addTaskCounter.bind(this);
    this.removeTask = this.removeTask.bind(this);
    this.taskCompleted=this.taskCompleted.bind(this);

    
    this.state = {
      tasks:[]
    };
}
    
  addTask(task)
   {
    let currentListOfTasks = this.state.tasks;

    currentListOfTasks.push(task);

    this.setState({tasks:currentListOfTasks});
  }

  removeTask(taskId) {
    

      let currentListOfTasks = this.state.tasks;

    
    
    let filteredTaskList = currentListOfTasks.filter((task)=> taskId !== task.id);
    
   this.setState({tasks:filteredTaskList});
 
    }

  taskCompleted(taskId){
    let currentListOfTasks = this.state.tasks;

    let filteredTaskList = currentListOfTasks.filter((task)=> taskId === task.id);

    let task= filteredTaskList[0];

    task.completed = true;

    this.setState({tasks:currentListOfTasks});

    
    }
  
 
 
  addTaskCounter(){

  
  let tasksLeft = this.state.tasks;
  
  let tasksRemaining = tasksLeft.length; 
   
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
      <TaskList tasks={this.state.tasks} removeTaskHandler={this.removeTask} taskCompletedHandler ={this.taskCompleted}  />
      
      
         </div>
    );
  }

}
export default App;

