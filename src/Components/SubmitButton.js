import React from 'react';

class SubmitButton extends React.Component{


    render() {

        return (<button style={styleSB}>Add task to list</button>);
    }


          
    };

    const styleSB={


    color:"green",
    background:"lightseagreen",
    width: "50%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"
        

    };


export default SubmitButton;