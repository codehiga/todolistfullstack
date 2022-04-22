import React, { useRef } from 'react';
import { useCrudContext } from '../../hooks/useCrudContext.js';
import { Container, Wrapper } from './styles.js';

function AddTask({categoriesWithTasks}) {

  const { handleCreateNewTask, setActualCategory, actualCategory } = useCrudContext();

  const titleRef = useRef('');
  const catRef = useRef('');
  const dateRef = useRef('');

  function taskBuilder(){

    if(titleRef.current.value === '' || dateRef.current.value === '') return;
    if(catRef.current.value === 'Selecione uma categoria') catRef.current.value = actualCategory;

    const dateConverted = new Date(dateRef.current.value);

    const taskData = {
      title : titleRef.current.value,
      category : catRef.current.value,
      limitDate : dateConverted.toUTCString(),
      done : false,
      limitDateTimestamp : dateConverted.getTime(),
      photoURL : 'teste'
    }

    handleCreateNewTask(taskData);
    setActualCategory(catRef.current.value);

    titleRef.current.value = '';
    catRef.current.value = 'Selecione uma categoria';
    dateRef.current.value = '';

    titleRef.current.focus();
  }

  return(
    <Container>
      <Wrapper>
        <span>
          <input ref={titleRef} type="text" placeholder='Tarefa' />
          <select ref={catRef}>
            <option defaultChecked="Selecione uma categoria" defaultValue="Selecione uma categoria" disabled>Selecione uma categoria</option>
            
            { categoriesWithTasks?.map((cat) => {
              return <option key={cat.title} defaultValue={cat.title}>{cat.title}</option>
            }) }
          </select>
        </span>
        <input ref={dateRef} type="date" />
        <button onClick={() => {taskBuilder()}}>Criar</button>
      </Wrapper>
    </Container>
  );
}

export default AddTask; 