import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  max-width: calc(100% - 300px);

  display: flex;
  justify-content: center;
`;


export const Wrapper = styled.div`
  width: 100%;
  min-height: 100%;
 



  padding: 15px;

  display: flex;
  flex-direction: column;
  gap: 15px;
`


export const TaskContainer = styled.div`
  width: 100%;
  height: auto;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: relative;
  padding: 10px;

  background-color: #999;

  
  border-radius: 15.5px 0 0 15.5px;

`

export const TaskTitle = styled.span`
  width: auto;
  height: 100%;
  cursor: pointer;

  display: flex;
  align-items: center;
  gap: 10px;
  

  margin-left: 50px;
`

export const TaskInfo = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 18px;
    text-transform: uppercase;
    font-weight: bold;
  }

  > b {
    font-size: 14px;
    font-weight: normal;
    font-style: italic;
  }
`

export const TaskCompletedBall = styled.span`
  width: 50px;
  height: 100%;

  border-radius: 15px 0 0 15px;

  ${props => props.done ?
  {
    background: 'green',
    transition:'0.25s'
  }:
  {
    background: 'red',
    transition:'0.25s'
  }}

  :hover{
    filter: brightness(0.5);
  }

  position: absolute;
  left: -1px;
`

export const TaskActions = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`