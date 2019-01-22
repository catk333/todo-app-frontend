import React from 'react';

class Task extends React.Component{

      constructor(props) {
            super(props);
            
            
      this.removeTaskFromList=this.removeTaskFromList.bind(this);
      this.taskCompleted=this.taskCompleted.bind(this);
    
      
      
            this.state={
                  tasks:[]
            };
      }

      removeTaskFromList(){

            this.props.onRemoveTaskHandler();

      }
      taskCompleted(){
            alert( 'Well done, one down!');


      }

    render() {

        return (
        <div>
            <div className="row" >
              <div className="col">
              {this.props.taskDescription}
              </div>
              <div className="col">
                    <input style={taskButton.done} type="submit" value="Done" onDoneClick={this.taskCompleted}/>
            </div>
              <div class="col">
                    <input style={taskButton.del} type="submit" OnRemoveClick={this.removeTaskFromList} value="Remove" />

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

