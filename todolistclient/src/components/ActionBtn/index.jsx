import React from 'react';

import { Button } from "./styles"

function ActionBtn({children}) {
  return(
    <Button>
      {children}
    </Button>
  );
}

export default ActionBtn;