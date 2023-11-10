import { createContext, useState } from "react";
import React from 'react'
export const MyContexts = createContext();


const MyContextProvider = ({ children }) => {
  const [values, setValues] = useState([])
  return (
    <MyContexts.Provider value={{ values, setValues }}>
      {children}
    </MyContexts.Provider>
  )
}

export default MyContextProvider