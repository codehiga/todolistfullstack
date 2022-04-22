import { BrowserRouter } from "react-router-dom"
import MenuLateral from "./components/MenuLateral"
import { CrudProvider } from "./contexts/CrudContex"

import { AppRoutes } from "./routes"

import { Container, Wrapper } from "./styles/appStyles"

export const App = () => {
  return(
    <Container>
      <Wrapper>
        <CrudProvider>
          <MenuLateral />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </CrudProvider>
      </Wrapper>
    </Container>
  )
} 