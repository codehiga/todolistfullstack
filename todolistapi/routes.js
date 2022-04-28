const cors = require("cors");
const express = require("express");
const router = express.Router();

var bodyParser = require('body-parser');
const TaskMethods = require("./Tasks");

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json())

const { 
  redeemData, 
  redeemDataById, 
  insertTaskData, 
  updateTaskStatus,
  deleteTask,
  changeTaskInfo,
} = TaskMethods;

router.use(cors());

router.get('/', (req, res) => {
  
  res.send('API by Higa!')
})

router.get('/tasks', async (req, res) => {

  res.send(await redeemData());
})

router.get('/uniquetask/:id', async (req, res) => {
  const taskId = req.params['id'];
  
  res.send(await redeemDataById(taskId));
})

router.post('/create-tasks', async (req, res) => {

  res.send(await insertTaskData(req.body));
})

router.put('/change-status', async (req, res) => {
  
  res.send(await updateTaskStatus(req.body));
})

router.put('/delete-task', async (req, res) => {
  
  res.send(await deleteTask(req.body));
})

router.put('/change-task-info', async (req, res) => {

  res.send(await changeTaskInfo(req.body));
})

module.exports = router;
