import React, { createContext } from 'react'
export const DataContext=createContext()
const contextApi = ({children}) => {
    const username="Sheryians"
  return (
    <DataContext.Provider value={username}>
        {children}
    </DataContext.Provider>
  )
}

export default contextApi