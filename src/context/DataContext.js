import React,{ createContext,useContext, useReducer} from "react";


export const DataContext = createContext()

export const DataProvider = ({ reducer,initialState,children }) => {
  
  return (
    <DataContext.Provider value={useReducer(reducer,initialState)}>
      {children}
    </DataContext.Provider>
  )
}

export const useDataValue = () => useContext(DataContext)