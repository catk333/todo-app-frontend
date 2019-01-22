import React from 'react';


class NumberTasks extends React.Component {

    constructor(props) {
      super(props);

     
        this.addTaskCounter= this.addTaskCounter.bind(this);
        
       
} 
    addTaskCounter(){
        
            this.props.taskCounterHandler();
    }


    render() {
      // tasks remaining should be the length of the array/number in the list. 

        return (<p1 style={styles.tasksNumber}> Tasks remaining:{this.props.tasks} </p1>);
    }
};

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
    
    