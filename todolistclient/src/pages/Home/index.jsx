import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../components/ActionBtn/styles';
import AddTask from '../../components/AddTask';
import { useCrudContext } from '../../hooks/useCrudContext';

import { Container, TaskCompletedBall, TaskContainer, TaskTitle, Wrapper, TaskActions, TaskInfo, AllTasksContainer } from './styles';

export const Home = () => {

  const { 
    redeemTasks,
    actualCategory, 
    categoriesWithTasks, 
    handleChangeTaskStatus,
    handleDeleteTask,
  } = useCrudContext();


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

        <AllTasksContainer>
        { categoriesWithTasks?.map((cat) => {
          if(cat.title === actualCategory){

            if(cat.thisCategoryTasks.length > 0){
              return cat.thisCategoryTasks.map((task) => {

                return(
                  <>
                    <TaskContainer key={task.id}>
                      <TaskTitle>
                        <TaskCompletedBall 
                          onClick={() => {
                            handleChangeTaskStatus(task.id)
                          }} done={task.done ? 'isDone' : '' } 
                        />

                        <Link style={{textDecoration: 'none', color:'#222'}} to={`/task/${task.id}`}>
                          <TaskInfo>
                            <h1>{task.title}</h1>
                            <span>Limite: <b>{convertDateToBR(task.limitDate)}</b></span>
                            <b>{task.done === true ? 'Finalizada' : 'Nao finalizada'}</b>
                          </TaskInfo>
                        </Link>
                      </TaskTitle>

                      <TaskActions>
                        <Button onClick={() => { handleDeleteTask(task.id) }}>Delete</Button>
                      </TaskActions>
                    </TaskContainer>

                    <hr />
                  </>
                )

                
              })
            }else{
              return <h4 key={cat}>Sem tasks por aqui :(</h4>
            }
          }
        }) }
      </AllTasksContainer>
      </Wrapper>
    </Container>
  );
} 
