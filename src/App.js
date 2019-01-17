import React, { Component } from 'react';
import Header from './Components/Header.js';
import SubHeading from './Components/SubHeading.js';
import NumberTasks from './Components/NumberTasks.js';
import './App.css'
import TaskList from './Components/TaskList.js';
import TaskEntry from './Components/TaskEntry.js'
class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      tasks: []
    };

    this.addTask = this.addTask.bind(this);
    this.removeTaskFromList = removeTaskFromList.bind(this);
  }
    
  addTask(task) {
    let currentListOfTasks = this.state.tasks;

    currentListOfTasks.push(task);

    this.setState({ tasks: currentListOfTasks});
  }

  removeTaskFromList(task){

    //set state of current task list
    let currentListOfTasks = this.state.tasks;

    // use filter method to remove any books that are not matching the same taskDescription, and return the array - the task entered. 
    let newTaskList = currentListOfTasks.filter( (task.taskDescription !== taskDescription ));

    //Reset state to show the new array as the list on the page. 
    this.setState({tasks:newTaskList});
 }
  
  render() {
    return (
      <div className="container">
        <Header />
        
        <TaskEntry tasks onSaveTaskHandler={this.addTask} /> 
        <br/> 
       <SubHeading/>
       <br/>
       <NumberTasks tasks={this.state.addTaskCounter}/>
       <br/> <br/>
      <TaskList tasks={this.state.tasks} removeTaskHandler={this.removeTaskFromList} />
      
         </div>
    );
  }

}
export default App;
