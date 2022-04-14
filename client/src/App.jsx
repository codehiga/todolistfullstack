import React, { useEffect } from "react";
import useSWR from "swr"
import axios from "axios"
import { v4 } from "uuid"

function App(){
  const [ title, setTitle ] = React.useState();
  const [ description, setDescription ] = React.useState();
  const [ data, setData ] = React.useState();

  const url = "https://fathomless-wave-70789.herokuapp.com"

  useEffect(() => {
    dataRedeem();
  
  }, [])

  async function dataRedeem(){
    const response = await axios.get(`${url}/tasks`);
    setData(response.data)
  }

  function sendTask(e){
    e.preventDefault();

    const newTask = {
      title,
      description,
      done : false,
      photoURL : "Teste"
    }
  
    axios.post(`${url}/create-tasks`, newTask)
  }

  async function deleteTask(id){
    
    const response = await axios.put(`${url}/delete-task`, {id});
    console.log(response)
  }

  async function handleChangeStatus(id){
    axios.put(`${url}/change-status`, {id})
  }

  if (!data) return <div>loading...</div>

  return(
    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>
      { data.map((task) => (
        <div  style={{display:"flex", flexDirection:"column"}} key={task.id}>
          <b>Nome da task: {task.title}</b>
          <b>Descrição da task: {task.description}</b>
          <b style={task.done ? {color:"green"} : {color : "red"}}>{task.done ? 'Tarefa finalizada' : 'Tarefa pendente'}</b>
          <b onClick={() => {deleteTask(task.id)}}>Delete</b>
          <b onClick={() => {handleChangeStatus(task.id)}}>Complete</b>
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