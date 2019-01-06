import React from 'react';

class NumberTasks extends React.Component{


    render() {

        return (<p1 style={styles.tasksNumber}>Tasks to be done : 3 </p1>);
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