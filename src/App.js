
import React, { Component } from 'react';
import Header from './Components/Header.js';
import SubHeading from './Components/SubHeading.js';
import NumberTasks from './Components/NumberTasks.js';
import './App.css'
import TaskList from './Components/TaskList.js';
import TaskEntry from './Components/TaskEntry.js';
import TasksService from './service/tasks';


class App extends Component {

  constructor(props) {
    super(props);


    this.addTask = this.addTask.bind(this);
    this.addTaskCounter=this.addTaskCounter.bind(this);
    this.deleteTask = this.deleteTask.bind(this);
    this.taskCompleted=this.taskCompleted.bind(this);

    
    this.state = {
      tasks:[]
    };
}


//this function needs to be after the constructer- order matters!

async componentDidMount() {
  const tasks = await TasksService.gettasks();
  console.log('tasks');
  this.setState({tasks:tasks});
}


async addTask(task){
    const response = await TasksService.saveTask(task);

    task.taskId = response.insertId;
    
    let currentListOfTasks = this.state.tasks;

    currentListOfTasks.push(task);

    this.setState({tasks:currentListOfTasks});
  }


// Doesn't work now at all! 
//Delete working in Postman. 
// Think the issue is still with this code? The function itself isnt working now.  
  async deleteTask(taskId){

    const response = await TasksService.deleteTask(taskId)
    
    let currentListOfTasks = this.state.tasks;

    let filteredTaskList = currentListOfTasks.filter((task)=> taskId !== task.id);
    
    this.setState({tasks:filteredTaskList});
 
  }

  
  async taskCompleted(taskId){

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
      <TaskList tasks={this.state.tasks} removeTaskHandler={this.deleteTask} taskCompletedHandler ={this.taskCompleted}  />
      
      
         </div>
    );
  }

}
export default App;

