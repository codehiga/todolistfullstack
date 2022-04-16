import styled from 'styled-components';


export const MenuContainer = styled.div`
  width: 100%;
  min-height: 300px;
  max-width: 300px;
  display: flex;
  justify-content: center;
`

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: blue;
  > ul {
    list-style: none;
    padding: 10px;
    > li {
      width: 100%;
      padding: 10px;
      cursor: pointer;
      background-color: #fff;
      margin-bottom: 10px;
      border-radius: 10px;
      transition: 0.5s;
      &.active {
        background-color: red;
        transition: 0.5s;
      }
    }
  }
`