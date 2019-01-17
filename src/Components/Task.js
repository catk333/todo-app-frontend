import React from 'react';

class Task extends React.Component{

      constructor(props) {
            super(props);
        

      this.removeTaskFromList=removeTaskFromList.bind(this);


      removeTaskFromList(){

            this.props.removeTaskHandler(this.props.tasks)
      }

    render() {

        return (
        <div>
            <div className="row" >
              <div className="col">
              {this.props.taskDescription}
              </div>
              <div className="col">
                    <input style={taskButton.done} type="submit" value="Done"/>
            </div>
              <div class="col">
                    <input style={taskButton.del} type="submit" value="Delete" removeTaskHandler = {this.props.removeTaskHandler}/>

              </div>
        </div>
     </div>
)
}
};
const taskButton = {

            spacingTask:{
                  paddingTop:"10px",
                  paddingBottom:"10px"


            },
   done:{
        backgroundColor:"green"
   },

    del:{
        backgroundColor:"red"


    }

   }



export default Task

