import React from "react";
import { BrowserRouter } from "react-router-dom";
import { QueriesProvider } from "./contexts/queriesContext";
import { Routes } from "./routes";

function App(){
  return(
    <BrowserRouter>
      <QueriesProvider>
        <Routes />
      </QueriesProvider>
    </BrowserRouter>

  )
}

export default App;