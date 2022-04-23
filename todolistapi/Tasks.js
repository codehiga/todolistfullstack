var prisma = require("@prisma/client");
const { PrismaClient } = require("@prisma/client");
const res = require("express/lib/response");
prisma = new PrismaClient();

const TaskMethods = {
  
  async redeemData(){
    return await prisma.TaskModel.findMany();
  },

  async redeemDataById(id){
    return await prisma.TaskModel.findUnique({
      where : { id : parseInt(id) },
    })
  },

  async insertTaskData(taskData){
    const currentDate = Date.now();

    if(taskData.limitDateTimestamp < currentDate){
      return 'Insira um valor maior do que o tempo atual!';
    }

    const createTask = await prisma.TaskModel.create({ data: taskData });
    return createTask;
  },

  async updateTaskStatus(taskData){
    const task = await prisma.TaskModel.findUnique({
    
      where: {
        id: taskData.id,
      },
    })
    
    if(task.done){
  
      const updateUser = await prisma.TaskModel.update({
        where: {
          id: taskData.id,
        },
        data: {
          done : false,
        },
      })
  
    
      return updateUser;
    }
  
    const updateUser = await prisma.TaskModel.update({
      where: {
        id: taskData.id,
      },
      data: {
        done : true,
      },
    })

    return updateUser;
  },

  async deleteTask(taskData){
    const deletedTask = await prisma.taskModel.delete({
      where: {
        id: taskData.id,
      },
       
    })

    return deletedTask;
  },

  async changeTaskInfo(taskData){
    const updateTask = await prisma.taskModel.update({
      where : {
        id : taskData.id
      },
      data : taskData.info
    })

    return updateTask;
  },

}

module.exports = TaskMethods;