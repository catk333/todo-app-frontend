
import React from 'react';

class Header extends React.Component{


    render() {

        return (<h1 style={styles.header}> My To Do Application </h1>);
    }
}

const styles= {

        header:{

    color: "black",
    fontfamily:"Arial Narrow",
    fontsize:"60px",
    fontweight:"bold",
    textalign:"center",
    
        }

          
    };


export default Header;