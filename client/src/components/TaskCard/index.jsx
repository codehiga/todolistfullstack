import React from 'react';
import { Container } from './styles.js';
import { Link } from "react-router-dom"
import axios from 'axios';

function turnToBRDate(date){
  const dt = new Date(date);
  return dt.toLocaleDateString('pt-br')
}


function TaskCard({task, handleChangeStatus, deleteTask, searchTask}) {

  return(
    <Container>
        <b>Id : {task.id}</b>
        <b>Nome da task: {task.title}</b>
        <b>Data limite: {turnToBRDate(task.limitDate)}</b>
        <b style={task.done ? {color:"green"} : {color : "red"}}>{task.done ? 'Tarefa finalizada' : 'Tarefa pendente'}</b>
        <span style={{display: 'flex', gap:"15px"}}>
          <b style={{cursor:"pointer"}} onClick={() => {deleteTask(task.id)}}>Delete</b>
          <b style={{cursor:"pointer"}} onClick={() => {handleChangeStatus(task.id)}}>Complete</b>
        </span>
        <Link to={`/task/${task.id}`}>Verificar task</Link>
    </Container>
  );
}

export default TaskCard;