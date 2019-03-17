import axios from 'axios';

const TasksService = {
    async gettasks (){
        let res = await axios.get("https://a197h1xke1.execute-api.eu-west-2.amazonaws.com/dev/tasks");
        let data= await res.data;
        return data;
  
    }, 

    async saveTask(task){
        let res = await axios.post("https://a197h1xke1.execute-api.eu-west-2.amazonaws.com/dev/tasks",task);
        return res.data;
    },


   async deleteTask(taskId){
    let res = await axios.delete("https://a197h1xke1.execute-api.eu-west-2.amazonaws.com/dev/tasks/{taskId}"+ taskId);
    let data = await res.data;
     return res.data;
    },

    async updateTask (taskId) {
    let res = await axios.put ("https://a197h1xke1.execute-api.eu-west-2.amazonaws.com/dev/tasks{taskId}" + taskId);
    let dataRecieved= await res.data;
    return dataRecieved;
    }
}


export default TasksService;