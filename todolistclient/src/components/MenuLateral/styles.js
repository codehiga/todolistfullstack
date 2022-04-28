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
<<<<<<< HEAD
  height: 100%;
  background-color: #222;
=======
  height: auto;
  
>>>>>>> ed7ff8b03bb6ce30ef3234045417f5735b22962d
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
<<<<<<< HEAD
        background-color: black;
        color: #fff;
=======
        background-color: #222;
        color:#fff;
        font-weight: bolder;
>>>>>>> ed7ff8b03bb6ce30ef3234045417f5735b22962d
        transition: 0.5s;
      }
    }
  }
`