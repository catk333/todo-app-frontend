import React from 'react';

class Task extends React.Component {

      constructor(props) {
            super(props);

            this.taskCompleted = this.taskCompleted.bind(this);
            this.deleteTask = this.deleteTask.bind(this);

      }

      deleteTask() {

            this.props.onRemoveTaskHandler(this.props.taskId);
      }

      taskCompleted() {

            this.props.onTaskCompletedHandler(this.props.taskId);
      }



      render() {

            let taskStyle = {};

            if(this.props.taskCompleted) {
                  taskStyle = taskButton.completedTask;
            }
            

            return (
                  <div>
                        <div className="row" >
                              <div className="col" style={taskStyle}>
                                     {this.props.taskId} - {this.props.taskDescription}
                              </div>
                              <div className="col">
                                    <input style={taskButton.done} type="submit" onClick={this.taskCompleted} value="Done"/>

                              </div>
                              <div class="col">
                                    <input style={taskButton.del} type="submit" onClick={this.deleteTask} value="Remove" />

                              </div>
                        </div>
                  </div>
            )
      }
};

const taskButton = {

      spacingTask: {
            paddingTop: "10px",
            paddingBottom: "10px"


      },
      done: {
            backgroundColor: "green"
      },

      del: {
            backgroundColor: "red"

      },
      completedTask:{
                  color: "green"

            }

      }





export default Task
