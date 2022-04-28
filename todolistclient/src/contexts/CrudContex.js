import axios from "axios";
import React, { createContext, useState } from "react";

export const CrudContext = createContext({});

export const CrudProvider = ({children}) => {
  const [ tasks, setTasks ] = useState();
  const [ actualCategory, setActualCategory ] = useState('Casa');
  const [ categoriesWithTasks, setCategoriesWithTasks ] = useState();
  const [ red, setRed ] = useState(false);

  const [ loading, setLoading ] = useState(false);

  const baseURL = 'https://todolistapi-devhiga.herokuapp.com';

  async function redeemTasks(){

    setLoading(true);

    axios.get(`${baseURL}/tasks`)
    .then(({data}) => {
      setTasks(data);
      filterCategories(data);

      setLoading(false);
    })
  }

  async function filterCategories(tasks){

    var categoriesArrayHolder = [
      {
        title : 'Estudos',
        thisCategoryTasks : []
      },
      {
        title : 'Casa',
        thisCategoryTasks : []
      },
      {
        title : 'Trabalho',
        thisCategoryTasks : []
      },
    ];

    categoriesArrayHolder.map(async cat => {

      tasks.map(task => {
        if(cat.title === task.category) return cat.thisCategoryTasks.push(task);
      })

    })

    setCategoriesWithTasks(categoriesArrayHolder);
  }

  async function checkStatus(status){

    if(status === 200){
      redeemTasks();
      return;
    }
  }

  async function handleDeleteTask(id){

    const { status } = await axios.put(`${baseURL}/delete-task`, {id});
    checkStatus(status);
  }

  async function handleRedeemUniqueTask(id){
    const { data } = await axios.get(`${baseURL}/uniquetask/${id}`);
    return data;
  }

  async function handleChangeTaskStatus(id){
    const { status } = await axios.put(`${baseURL}/change-status`, {id});
    checkStatus(status);
  }

  async function handleCreateNewTask(data){

    axios.post(`${baseURL}/create-tasks`, data)
    .then(() => {

      redeemTasks();
    })
  }

  async function handleChangeTaskInfo(data){

    axios.put(`${baseURL}/change-task-info`, data)
    .then(() => {

      redeemTasks();
      setRed(true);
    })

  }

  if(loading && !categoriesWithTasks) return <h1>Loading!</h1>

  return(
    <CrudContext.Provider value={{
      redeemTasks,
      tasks,
      actualCategory,
      setActualCategory,
      setCategoriesWithTasks,
      categoriesWithTasks,
      handleRedeemUniqueTask,
      handleChangeTaskStatus,
      handleDeleteTask,
      handleCreateNewTask,
      baseURL,
      handleChangeTaskInfo,
      red,
      setRed
    }}>
      {children}
    </CrudContext.Provider>
  )
} 
