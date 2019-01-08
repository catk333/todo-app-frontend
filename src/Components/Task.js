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
                    <input type="submit" value="Done"/>
            </div>
              <div class="col">
                    <input type="submit" value="Delete"/>

              </div>
        </div>
     </div>
)
}
};

export default Task
         