import React, { createContext, useState } from 'react'

const DataContext = createContext()

const DataProvider = ({children}) => {

    const [ carrito, setCarrito ] = useState([])
    const [ productoSeleccionado, setProductoSeleccionado ] = useState({})
    const [ toasts, setToasts ] = useState([])


    const agregarToast = (mensaje) =>{
      setToasts(t => [...t, mensaje])

      setTimeout(()=>{
        setToasts(t => {
          return t.filter((toast, i) => i !== 0)
        })
      },2000)
    }

  return (
    <DataContext.Provider
        value={{
            carrito,
            setCarrito,
            productoSeleccionado,
            setProductoSeleccionado,
            toasts,
            setToasts,
            agregarToast
        }}
    >
        {children}
    </DataContext.Provider>
  )
}

export{ DataProvider }

export default DataContext