import React from 'react';

class SubHeading extends React.Component{


    render() {

        return (<h1 style={styleSH}> To Do List </h1>);
    }
}

const styleSH= {
    textalign:"center",
    color: "black",
    textshadow: "2px 6px 4px #000000",
    fontfamily: "Arial, Helvetica,serif",
    fontsize:"30px",
    fontweight:"bold"
    

          
    };


export default SubHeading;