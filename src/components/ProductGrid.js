import useData from '@/Hooks/useData'
import { generarId } from '@/helpers'
import Image from 'next/image'
import React from 'react'

const ProductGrid = ({productos}) => {

    const { setCarrito } = useData()

    const agregarProducto = producto =>{
        producto.id = generarId()
        setCarrito(c => [...c, {...producto}])
    }

  return (
    <div className='w-full flex flex-wrap justify-center'>
        {!productos || productos?.length===0 ? <div className='text-center text-primary-light'>No se encontraron productos.</div> 
            :
            productos.map(producto =>{
                return(
                    <div key={generarId()} className='h-400px w-80 m-5 rounded-md hover:bg-slate-900'>
                        <div className='h-1/2'>
                            <div className='flex flex-col justify-center w-full h-full'>
                                <Image src={producto.imagen} height={200} width={200} style={{objectFit: "contain"}} className='mx-auto max-h-48' alt={producto.titulo}/>
                            </div>
                        </div>
                        <div className='px-4 py-1 pb-4 h-1/2 flex flex-col justify-between'>
                            <div>
                                <h4 className='text-xl py-2'>{producto.titulo}</h4>
                                <p>{producto.resumen}</p>
                                <p className='text-primary-site text-lg mt-2'>{producto.precio} €</p>
                            </div>
                            <div className='flex gap-2 text-end'>
                                <button className='w-full border py-1 hover:border-primary-site hover:text-primary-site'>Ver</button>
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
    </div>
  )
}

export default ProductGrid