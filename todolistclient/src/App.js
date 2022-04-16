import { BrowserRouter } from "react-router-dom"
import MenuLateral from "./components/MenuLateral"
import { CrudProvider } from "./contexts/CrudContex"

import { AppRoutes } from "./routes"

import { Container } from "./styles/appStyles"

export const App = () => {
  return(
    <Container>
      <CrudProvider>
        <MenuLateral />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </CrudProvider>
    </Container>
  )
} 