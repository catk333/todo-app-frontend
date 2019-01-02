import React from 'react';

class Image extends React.Component{


    render() {
        return (<img style={styleImage} src="file:///Users/catherinewaind/beach-daylight-foam-386148.jpg"></img>);
    }
};

const styleImage={

    width: "50%",
    height: "auto",
    //marginleft: "auto",
    //marginright: "auto",
    //borderradius: "50%"




};



export default Image;