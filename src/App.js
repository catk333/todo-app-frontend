import React, { Component } from 'react';
import './App.css';
import Header from './Components/Header.js';
import SubmitButton from './Components/SubmitButton.js';
import TaskAdd from './Components/TaskAdd.js';
import TaskTable from './Components/TaskTable.js';
import Image from './Components/Image.js';
import SubHeading from './Components/SubHeading.js';
import NumberTasks from './Components/NumberTasks.js'


class App extends Component{
  render() {
    return (
      <div className="container">
      
      <Header />
      <br/>
      <TaskAdd />
      <br/> 

      <SubmitButton />
       <br/>

    <SubHeading/>
       <br/>
       <NumberTasks/>
       <br/> 
       <TaskTable/>
        <br/>
        <Image/> 

      </div>
    );

  }
}


export default App;
