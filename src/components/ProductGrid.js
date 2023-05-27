import useData from '@/Hooks/useData'
import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import Toast from './Toast'

const ProductGrid = ({productos}) => {

    /**
     * 
     * Componente usado exclusivamente con la API productos.
     * 
     * Debe situarse en el "main" de la página.
     * 
     * Trabaja con un contexto de carrito y permite agregar el producto seleccionado a él.
     * 
     * Ver Producto enlaza con una página "detalle". La página "detalle" debe estar disponible o se debe cambiar la función.
     * 
     * Se debe instalar el componente Toast:  npm install --save react-toastify
     * 
     * @param productos[]: {
     * 
     * titulo
     * resumen
     * precio
     * imagen
     * 
     * }
     * 
     * @param setCarrito: function()
     * Función que agrega productos a la cesta de la web.
     * 
     * @param setProductoSeleccionado: function()
     * Función que guarda el producto que se ha seleccionado del grid.
     * 
     * @param agregarToast: function('string')
     * Función que agregará un texto al Toast de la página.
     */


    // Parámetros pasados a través del Hook useData(), contexto de la página.
    // Cambiar en caso de que se reciban los parámetros de otro Hook o como props en el componente.
    const { setCarrito, setProductoSeleccionado, agregarToast } = useData()

    const router = useRouter();

    const generarId = () =>{
        const random = Math.random().toString(36).substring(2)
        const randomDate= Date.now().toString()
        return random+randomDate
    }

    const agregarProducto = producto =>{
        producto.id = generarId()
        setCarrito(c => [...c, {...producto}])
        agregarToast("Agregado a carrito")
    }

    const verDetalle = producto =>{
        setProductoSeleccionado(producto)
        router.push("detalles")
    }

  return (
    <div className='w-full flex flex-wrap justify-center'>
        {!productos || productos?.length===0 ? <div className='text-center text-primary-light'>No se encontraron productos.</div> 
            :
            productos.map(producto =>{
                return(
                    <div key={generarId()} className='h-400px w-80 m-5 rounded-md hover:bg-secondary-dark'>
                        <div className='h-1/2'>
                            <div className='flex flex-col justify-center w-full h-full'>
                                <Image src={producto.imagen} height={200} width={200} style={{objectFit: "contain"}} className='mx-auto max-h-48 w-auto max-w-product' alt={producto.titulo}/>
                            </div>
                        </div>
                        <div className='px-4 py-1 pb-4 h-1/2 flex flex-col justify-between'>
                            <div>
                                <h4 className='text-xl py-2'>{producto.titulo}</h4>
                                <p>{producto.resumen}</p>
                                <p className='text-primary-site text-lg mt-2'>{producto.precio} €</p>
                            </div>
                            <div className='flex gap-2 text-end'>
                                <button className='w-full border py-1 hover:border-primary-site hover:text-primary-site'
                                    onClick={()=>verDetalle(producto)}
                                >Ver</button>
                                <button 
                                    className='w-full border py-1 hover:border-primary-site hover:text-primary-site'
                                    onClick={()=>agregarProducto(producto)}
                                >Agregar</button>
                            </div>
                        </div>
                    </div>
                )
            })
        }
        <Toast/>
    </div>
  )
}

export default ProductGrid