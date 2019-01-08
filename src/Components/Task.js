import React from 'react';

class Task extends React.Component{


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
                    <input style={taskButton.del} type="submit" value="Delete"/>

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
         