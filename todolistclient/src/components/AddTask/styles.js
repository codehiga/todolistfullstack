import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
`;


export const Wrapper = styled.div`
  width: 100%;
  padding: 10px 0;
  > span {
    display: flex;
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
  }
` 