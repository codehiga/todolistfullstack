import React, {useContext} from "react"
import { QueriesContext } from "../contexts/queriesContext"

export const useQueryContext = () => {
  return useContext(QueriesContext);
}