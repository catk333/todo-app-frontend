import React from 'react';

class TaskTable extends React.Component{


    render() {

        return (
        <div>
            <div class="row">
              <div class="col">
              First task
              </div>
              <div class="col">
                    <input style={style.done} type="submit" value="Done"/>
            </div>
              <div class="col">
                    <input type="submit" value="Delete"/>

              </div>
        </div>

        
        <div class="row">
              <div class="col">
                    Second task
              </div>
              <div class="col">
                    <input style={style.done} type="submit" value="Done"/>
              </div>
              <div class="col">
                    <input type="submit" value="Delete"/>
              </div>
        </div>

        <div class="row">
              <div class="col">
                    Third task
              </div>
              <div class="col">
                    <input style={style.done} type="submit" value="Done"/>                 
              </div>
              <div class="col">
                    <input   type="submit" value="Delete"/>
              </div>
        </div>
  </div>
            );
        }
    };

    const style={
 
        done:{
            color:"blue"
        }
       




        
    };


        



    
export default TaskTable;