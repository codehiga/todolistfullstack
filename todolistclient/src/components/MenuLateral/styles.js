import styled from 'styled-components';


export const MenuContainer = styled.div`
  @media (min-width: 1024px){
    width: 100%;
  }
  min-height: 300px;
  max-width: 300px;
  display: flex;
  align-items: center;
  flex-direction: column;

  padding: 20px 0;

  background-color: #fff;

  > h4 {
    margin: 10px 0;
    width: 100%;
    text-align: center;
  }
`

export const MenuWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #222;
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
        background-color: black;
        color: #fff;
        transition: 0.5s;
      }
    }
  }
`