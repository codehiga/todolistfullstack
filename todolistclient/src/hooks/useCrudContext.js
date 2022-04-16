import { useContext } from "react"
import { CrudContext } from "../contexts/CrudContext"

export const useCrudContext = () => {
  return useContext(CrudContext);
}