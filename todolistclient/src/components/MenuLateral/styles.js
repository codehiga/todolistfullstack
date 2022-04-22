import styled from 'styled-components';


export const MenuContainer = styled.div`
  @media (min-width: 1024px){
    width: 100%;
  }
  min-height: 300px;
  max-width: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: blue;
`

export const MenuWrapper = styled.div`
  width: 100%;
  height: auto;
  
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
      max-width: 100px;
      @media (min-width: 1024px){
        min-width: 100%;
      }

      &.active {
        background-color: red;
        transition: 0.5s;
      }
    }
  }
`