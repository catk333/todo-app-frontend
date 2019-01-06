import React from 'react';

class TaskAdd extends React.Component{


    render() {

        return (<input style={styleTA} type="text"></input>);
    }
}
const styleTA={

    width: "50%",
    height: "auto",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto"

};

export default TaskAdd;