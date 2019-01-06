import React from 'react';

class SubHeading extends React.Component{


    render() {

        return (<h1 style={styleSH}> To Do List </h1>);
    }
}

const styleSH= {
    textAlign:"center",
    color: "black",
    fontFamily: "Arial, Helvetica,serif",
    fontSize:"30px",
    fontWeight:"bold"
    

          
    };


export default SubHeading;