import React from 'react';

class NumberTasks extends React.Component{


    render() {

        return (<p1 style={styles.tasksNumber}>Tasks to be done : 3 </p1>);
    }
}

const styles= {

    tasksNumber:{

    color: "green",
    fontfamily:"Arial Narrow",
    fontsize:"40px",
    fontweight:"bold",
    textalign:"center",
    
        }

          
    };


export default NumberTasks;