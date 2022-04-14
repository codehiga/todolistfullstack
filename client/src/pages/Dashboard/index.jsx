import React, { useEffect } from "react";
import axios from "axios"
import TaskCard from "../../components/taskCard";
import { useQueryContext } from "../../hooks/useQueryContext";

function Dashboard() {

  const [ title, setTitle ] = React.useState('');
  const [ limitDate, setLimitDate ] = React.useState('');

  const { allTasksData, dataRedeem, searchTask, handleChangeStatus, deleteTask, sendTask, turnTimestampLimitDate } = useQueryContext();


  async function handleSendFormData(e){
    e.preventDefault();

    const newTask = {
      title,
      limitDate,
      done : false,
      photoURL : "Teste",
      limitDateTimestamp : turnTimestampLimitDate(limitDate)
    }

    const response = await sendTask(newTask);
    
    if(response.status === 200){
      setTitle('');
    }
  }
  

  useEffect(() => { dataRedeem(); }, [])

  if (!allTasksData) return <div>loading...</div>
  
  return(
    <div style={{display:"flex", flexDirection:"column", gap:"15px"}}>

      { allTasksData?.map((task, index) => {
        return <TaskCard searchTask={searchTask} key={task.id} handleChangeStatus={handleChangeStatus} deleteTask={deleteTask} task={task} />
        
      }) }
      

      <form onSubmit={(e) => {handleSendFormData(e)}}>
        <input value={title} onChange={(e) => {setTitle(e.target.value)}} placeholder="Titulo" />
        <input onChange={(e) => {
          setLimitDate(e.target.value)
        }} type="datetime-local" />
        <button>Send</button>
      </form>
    </div>
  );
}

export default Dashboard;