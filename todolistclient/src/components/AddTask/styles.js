import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;


export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;

  input, select, button {
    all: unset;
    border-radius: 0;
    box-sizing: border-box;
    border: none;

    background: #fff;
  }

  > span {
    display: flex;
    width: 100%;
    max-width: 100%;

    > input {
      padding: 10px;
      width: 50%;
      font-size: 16px;
    }

    > select {
      padding: 10px;
      width: 50%;
      font-size: 16px;
    }
  }

  > input {

    padding: 8px;
    width: 100%;
    font-size: 16px;
  }

  > button {
    width: 100%;
    padding: 10px;
    cursor: pointer;
    text-align: center;
  }

  
` 