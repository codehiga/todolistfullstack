import React from "react";
import useSWR from "swr"
import axios from "axios"
import { v4 } from "uuid"

function App(){
  const [ title, setTitle ] = React.useState();
  const [ description, setDescription ] = React.useState();

  const url = "http://localhost:3005"

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR(`${url}/tasks`, fetcher)

  function sendTask(e){
    e.preventDefault();

    const newTask = {
      title,
      description,
      done : false,
      photoURL : "Teste"
    }
  
    axios.post(`${url}/create-tasks`, newTask);
  }

  function handleChangeStatus(id){

    console.log(id)
    
    axios.put(`${url}/change-status`, {id})
  }

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return(
    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
      { data.map((task) => (
        <div onClick={() => {handleChangeStatus(task.id)}} style={{display:"flex", flexDirection:"column"}} key={task.id}>
          <b>Nome da task: {task.title}</b>
          <b>Descrição da task: {task.description}</b>
          <b style={task.done ? {color:"green"} : {color : "red"}}>{task.done ? 'Tarefa finalizada' : 'Tarefa pendente'}</b>
        </div>
      )) }

      <form onSubmit={(e) => {sendTask(e)}}>
        <input onChange={(e) => {setTitle(e.target.value)}} placeholder="Titulo" />
        <input onChange={(e) => {setDescription(e.target.value)}} placeholder="Description" />
        <button>Send</button>
      </form>
    </div>
  )
}

export default App;