import React, { Component } from 'react';
import Header from './Components/Header.js';
import SubmitButton from './Components/SubmitButton.js';
import TaskAdd from './Components/TaskAdd.js';
import TaskList from './Components/TaskList.js';
import Image from './Components/Image.js';
import SubHeading from './Components/SubHeading.js';
import NumberTasks from './Components/NumberTasks.js';
import './App.css'



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
       <br/> <br/>
       <TaskList/>

        <br/>
        <Image/> 

      </div>
    );

  }
}


export default App;
