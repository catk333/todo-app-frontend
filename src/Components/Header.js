
import React from 'react';

class Header extends React.Component{


    render() {

        return (<h1 style={styles.header}> My To Do Application </h1>);
    }
}

const styles= {

        header:{

            color: "blue",
            textDecoration:"underline"
        }

          
    };


export default Header;