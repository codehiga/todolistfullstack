import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"

import Dashboard from "./pages/Dashboard"
import TaskPage from "./pages/TaskPage"

export const Routes = () => {
  return(
    <Switch>
      <Route exact path="/" component={Dashboard} />
      <Route path="/task/:id" component={TaskPage} />
    </Switch>
  )
}