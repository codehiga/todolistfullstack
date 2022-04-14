import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQueryContext } from '../../hooks/useQueryContext';
import useSWR from 'swr';


function TaskPage() {
  const { id } = useParams();

  const fetcher = (...args) => fetch(...args).then(res => res.json())

  const { data, error } = useSWR(`https://todolistapi-devhiga.herokuapp.com/uniquetask/${id}`, fetcher);


  if(!data) return <h1>Loading</h1>

  console.log(data)

  return(
    <div>
      <h1>{data.title}</h1>

      <b>{data.done ? <b>Tarefa concluida!</b> : <b>Tarefa pendente</b>}</b>
    </div>
  );
}

export default TaskPage;