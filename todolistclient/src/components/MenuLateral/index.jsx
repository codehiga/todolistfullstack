import React, { useEffect } from 'react';
import { useCrudContext } from '../../hooks/useCrudContext';

import { MenuContainer, MenuWrapper } from './styles';

function MenuLateral() {

  const { actualCategory, setActualCategory, categoriesWithTasks, redeemTasks } = useCrudContext();

  useEffect(() => {
    redeemTasks();
  }, [])

  if(!categoriesWithTasks) return <h1>Carregando</h1>

  return(
    <MenuContainer>
        <MenuWrapper>
          <ul>{categoriesWithTasks.map((category) => {
            return <li 
            onClick={(e) => {
              setActualCategory(category.title)
            }} 
            className={ actualCategory === category.title ? 'active'  : '' } 
            key={category.title}>{category.title}</li>
          })}</ul>
        </MenuWrapper>
    </MenuContainer>
  );
}

export default MenuLateral; 