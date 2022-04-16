import React, { useEffect, useRef, useState } from 'react';
import { Link, useParams, Navigator, Navigate, useNavigate } from 'react-router-dom';
import useSWR, { mutate, useSWRConfig } from 'swr';
import { useCrudContext } from '../../hooks/useCrudContext';

import { Container, Wrapper } from "./styles";

function TaskPage() {
  const { id } = useParams();
  const { baseURL, handleChangeTaskInfo, red, setRed } = useCrudContext();

  const [ editMode, setEditMode ] = useState(false);

  const { mutate } = useSWRConfig();

  const fetcher = (url) => fetch(url).then((res) => res.json());
  const { data, error } = useSWR(`${baseURL}/uniquetask/${id}`, fetcher);

  const [ taskStatus, setTaskStatus ] = useState();

  const newTitleRef = useRef('');
  const newDateRef = useRef('');
  const newCategoryRef = useRef('');

  const navigate = useNavigate()

  useEffect(() => {
    if(red === true){
      navigate("/", { replace:true })
      return setRed(false)
    }

    return;
  }, [red])

  if(error) return console.log(error) 
  if(!data) return <h1>Carregando</h1>


  function convertDateToBR(date){
    var newDate = new Date(date);

    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  }

  function convertDefaultValue(date){
    var defaultDate = new Date(date);
    var month;

    if((defaultDate.getMonth() + 1) > 9){
      month = defaultDate.getMonth() + 1
    }else{
      month = `0${defaultDate.getMonth() + 1}`
    }

    return `${defaultDate.getFullYear()}-${month}-${defaultDate.getDate()}`
  }

  async function dataBuild(){

    const dateConverted = new Date(new Date(newDateRef.current.value).getTime() + 86400000);

    const taskData = {
      id : data.id,
      info : {
        title : newTitleRef.current.value,
        category : newCategoryRef.current.value,
        limitDate : dateConverted.toUTCString(),
        done : taskStatus,
        limitDateTimestamp : data.limitDateTimestamp,
        photoURL : 'teste'
      }
    }

    handleChangeTaskInfo(taskData)
   
  }

  function verifyModification(){

    if(editMode === true){

      if(newTitleRef.current.value !== data.title){
        dataBuild();
        return;
      }

      if(new Date(newDateRef.current.value).getTime() + 86400000 != new Date(data.limitDate).getTime()){
        
        dataBuild();
        return;
      }

      // if(taskStatus !== data.done){
      //   dataBuild();
      //   return;
      // }

      if(newCategoryRef.current.value !== data.category){
        dataBuild();
        return;
      }

    }

    if(editMode === false){
      setEditMode(true)
    }else{
      setEditMode(false)
    }
  }
  

  return(
    <Container>
      <Link to="/">Voltar</Link>
      <Wrapper>
      <h1>{ editMode === false ? data.title : <input ref={newTitleRef} defaultValue={data.title} /> } || id: {id}</h1> 
        <b>{ editMode === false ? data.category : <input ref={newCategoryRef} defaultValue={data.category} /> }</b> 
      
        <b>{taskStatus === true ? 'Finalizado' : 'Nao finalizado'} 
        
        {editMode === true && <button onClick={() => { 
          taskStatus === false ? setTaskStatus(true) : setTaskStatus(false)
          }}
        > Alterar</button>} </b>

        <b>Previsao para finalizar em: { editMode === false ? convertDateToBR(data.limitDate) : <input ref={newDateRef} defaultValue={convertDefaultValue(data.limitDate)} type="date" /> }</b>
        
        <b>Task criada em: {convertDateToBR(data.createdAt)}</b>
        
        <button onClick={() => {
          verifyModification();
          editMode === true ? setEditMode(false) : setEditMode(true)
        }}>Editar</button>
      </Wrapper>
    </Container>
  );
}

export default TaskPage;