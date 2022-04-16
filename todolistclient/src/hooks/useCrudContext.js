import { useContext } from "react"
import { CrudContext } from "../contexts/CrudContex";

export const useCrudContext = () => {
  return useContext(CrudContext);
} 