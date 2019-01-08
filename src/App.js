import React, { Component } from 'react';
import Header from './Components/Header.js';

import Image from './Components/Image.js';
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
  }
    
  addTask(task) {
    let currentListOfTasks = this.state.tasks;

    currentListOfTasks.push(task);

    this.setState({ tasks: currentListOfTasks
    });
  }
  





  render() {
    return (
      <div className="container">
        <Header />
        
        <TaskEntry tasks onSaveTaskHandler={this.addTask} /> 
        <br/> 
       <SubHeading/>
       <br/>
       <NumberTasks/>
       <br/> <br/>
      <TaskList tasks={this.state.tasks} />
      
         </div>
    );
  }

}
export default App;
