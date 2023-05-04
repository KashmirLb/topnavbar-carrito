import React, { createContext, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({children}) => {

    const [ carrito, setCarrito ] = useState([])

  return (
    <DataContext.Provider
        value={{
            carrito,
            setCarrito
        }}
    >
        {children}
    </DataContext.Provider>
  )
}

export{ DataProvider }

export default DataContext