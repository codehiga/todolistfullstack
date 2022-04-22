import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AddTask from '../../components/AddTask';
import { useCrudContext } from '../../hooks/useCrudContext';

import { Container, TaskCompletedBall, TaskContainer, TaskTitle, Wrapper, TaskActions, TaskInfo } from './styles';

export const Home = () => {

  const { 
    redeemTasks,
    actualCategory, 
    categoriesWithTasks, 
    handleChangeTaskStatus,
    handleDeleteTask,
  } = useCrudContext();


  // Carrega as tasks!
  useEffect(() => {
    if(!categoriesWithTasks) redeemTasks();
  }, [])


  function convertDateToBR(date){
    var newDate = new Date(date);

    return `${newDate.getDate()}/${newDate.getMonth() + 1}/${newDate.getFullYear()}`
  }

  return(
    <Container>

      <Wrapper>
        <h1>{actualCategory}</h1>

        <AddTask categoriesWithTasks={categoriesWithTasks} />

        { categoriesWithTasks?.map((cat) => {
          if(cat.title === actualCategory){

            if(cat.thisCategoryTasks.length > 0){
              return cat.thisCategoryTasks.map((task) => {

                return(
                  <TaskContainer key={task.id}>
                    <TaskTitle>
                      <TaskCompletedBall 
                        onClick={() => {
                          handleChangeTaskStatus(task.id)
                        }} done={task.done ? 'isDone' : '' } 
                      />

                      <TaskInfo>
                        <h1>{task.title}</h1>
                        <span>Limite: <b>{convertDateToBR(task.limitDate)}</b></span>
                      </TaskInfo>
                    </TaskTitle>

                    <TaskActions>
                      <Link to={`/task/${task.id}`}>Visualizar</Link>
                      <b onClick={() => { handleDeleteTask(task.id) }}>Delete</b>
                    </TaskActions>
                  </TaskContainer>
                )
              })
            }else{
              return <h1 key={cat}>Sem tasks por aqui :(</h1>
            }
          }
        }) }
      </Wrapper>
    </Container>
  );
} 
