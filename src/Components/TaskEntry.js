import React from 'react';

class TaskEntry extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            taskDescription: ""
        };

        //Binding

        this.onSaveClicked = this.onSaveClicked.bind(this);
        this.onTaskTextFieldUpdated = this.onTaskTextFieldUpdated.bind(this);
    }

   //Function- Save button
    onSaveClicked() {

        const taskToBeAdded = {
            id: (Math.random() * 100),
            description: this.state.taskDescription,
            completed: false
    };

        this.props.onSaveTaskHandler(taskToBeAdded);


      //Clear 
        this.setState({
            taskDescription: ""
        });
    }


    //Function- text updated
    onTaskTextFieldUpdated(event) {
        const description = event.target.value;

        this.setState({
            taskDescription: description
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col">
                    <input type="text" value={this.state.taskDescription} onChange={this.onTaskTextFieldUpdated} />
                </div>
                <div className="col">
                    <input  style={saveButton} type="button" value="Save" onClick={this.onSaveClicked} />
                </div>
            </div>
        );
    }

}

const saveButton = {

    backgroundColor: "darkCyan",

};

export default TaskEntry;

