import React, { createContext } from "react";
import axios from 'axios';

export const QueriesContext = createContext({});

export const QueriesProvider = ({children}) => {

  const [ allTasksData, setAllTasksData ] = React.useState();

  const url = "https://todolistapi-devhiga.herokuapp.com"

  async function confirmAndRedeemData(statusCode){
    if(statusCode === 200){
      setAllTasksData(await dataRedeem());
    }
  }

  async function dataRedeem(){

    const response = await axios.get(`${url}/tasks`);
    setAllTasksData(response.data);
    return response.data;
  }

  async function sendTask(newTask){
  
    const response = await axios.post(`${url}/create-tasks`, newTask)
    confirmAndRedeemData(response.status);
    return response;
  }

  async function deleteTask(id){
    
    const response = await axios.put(
      `${url}/delete-task`,
      { id },
    );
  
    confirmAndRedeemData(response.status);
    return response;
  }

  async function handleChangeStatus(id){

    const response = await axios.put(`${url}/change-status`, {id})
    confirmAndRedeemData(response.status);
    return response;
  }

  function turnTimestampLimitDate(date){
    const dt = new Date(date);

    return dt.getTime();
  }

  async function searchTask(id){

    const response = await axios.get('https://todolistapi-devhiga.herokuapp.com/uniquetask/'+id);
    return response.data;
  }


  return(
    <QueriesContext.Provider value={{searchTask, handleChangeStatus, deleteTask, sendTask, allTasksData, dataRedeem, turnTimestampLimitDate}} >
      {children}
    </QueriesContext.Provider>
  )
}
