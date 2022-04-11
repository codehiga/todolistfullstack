const { PrismaClient } = require("@prisma/client");
var prisma = require("@prisma/client");
const express = require('express');
const app = express();
const port = 3005;
const cors = require("cors");
var bodyParser = require('body-parser');

prisma = new PrismaClient();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/tasks', async (req, res) => {
  const allTasks = await prisma.TaskModel.findMany();
  
  res.send(allTasks)
})

app.post('/create-tasks', async (req, res) => {
  const createUser = await prisma.TaskModel.create({ data: req.body })
  console.log(createUser);
})

app.put('/change-status', async (req, res) => {
  const task = await prisma.TaskModel.findUnique({
    where: {
      id: req.body.id,
    },
  })
  
  if(task.done){

    const updateUser = await prisma.TaskModel.update({
      where: {
        id: req.body.id,
      },
      data: {
        done : false,
      },
    })

    console.log(updateUser)
    return;

  }

  const updateUser = await prisma.TaskModel.update({
    where: {
      id: req.body.id,
    },
    data: {
      done : true,
    },
  })

  console.log(updateUser)
})



app.listen(port, () => {
  console.log(`Servidor ouvindo na porta: ${port}`)
})