import React from 'react';

class Image extends React.Component{


    render() {
        return (<img style={styleImage}  alt= "Sea picture" src="file:///Users/catherinewaind/beach-daylight-foam-386148.jpg"></img>);
    }
};

const styleImage={

    width: "100%",
    height: "auto",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "50%"




};



export default Image;