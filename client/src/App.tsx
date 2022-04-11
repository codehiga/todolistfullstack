import axios from "axios";
import React, { useEffect, useState } from "react"
import useSWR, { Key, Fetcher } from 'swr'

export const App = () => {
  const url = "http://localhost:3005/tasks";

  const { data, error } = useSWR(url, fetch);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>
  
  console.log(data.body?.tee)

  return(
    <div>
      <h1></h1>
    </div>
  )
}