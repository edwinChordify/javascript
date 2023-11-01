import { createContext, useState } from "react";
import React from 'react'
export const MyContexts = createContext();


const Mycontext = ({children}) => {
    const [items,setItems]=useState([])
  return (
    <MyContexts.Provider value={{items,setItems}}>
        {children}
    </MyContexts.Provider>
  )
}

export default Mycontext