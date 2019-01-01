import React from 'react';

class SubHeading extends React.Component{


    render() {

        return (<h1 style={styles.header}> To Do List </h1>);
    }
}

const styles= {

        header:{

            color: "blue",
            textDecoration:"underline"
        }

          
    };


export default SubHeading;