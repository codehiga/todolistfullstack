import { Routes, Route } from "react-router-dom";

import { Home } from "./pages/Home";
import TaskPage from "./pages/TaskPage";

export const AppRoutes = () => {
  return(
    <Routes>
      <Route element={<Home />} path="/" />
      <Route element={<TaskPage />} path="/task/:id" />
    </Routes>
  )
} 