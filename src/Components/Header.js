
import React from 'react';

class Header extends React.Component{


    render() {

        return (<h1 style={styles.header}> To Do List </h1>);
    }
}

const styles= {

        header:{

            color: "red",
            textDecoration:"underline"
        }

          
    };


export default Header;