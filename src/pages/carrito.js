import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import useData from '@/Hooks/useData'
import { generarId } from '@/helpers'

const Carrito = () => {

  const { carrito, setCarrito } = useData()

  const eliminarProducto = producto => {
    setCarrito(actualCarrito => actualCarrito.filter( prod => prod.id !== producto.id))
  }

  return (
    <Layout page={"Carrito"}>
      <header hidden><h1>Carrito</h1></header>
      <main className='text-primary-light pt-16 px-10'>
        <div className="w-full p-10 pb-0">
          <h1 className="text-4xl text-primary-site">Mi Carrito</h1>
          <p className=" mt-5 mb-0">Revisa tu pedido</p>
        </div>
        <div className='flex w-full my-4 gap-2'>
          <ul className='p-10 w-4/5'>

            {!carrito || carrito?.length === 0 ? <li>No hay productos en el carrito</li>
            : 
              carrito.map(producto =>

            <li className='h-72 w-full mb-5 flex border' key={generarId()}>
              <div className='w-72 h-full flex flex-col align-middle justify-center'>
                <div className="h-fit w-full">
                  <Image src={producto.imagen} height={250} width={250}  alt="portatil" className='m-auto max-h-60 w-auto'/>
                </div>
              </div>
              <div className='h-full flex flex-1 flex-col'>
                <div className='w-full h-2/3 flex'>
                  <div className='w-1/2 px-20'>
                    <h3 className='text-2xl p-2 text-primary-site'>{producto.titulo}</h3>
                    <p className='p-2 text-xl'>Cantidad: <span>1</span></p>
                  </div>
                  <div className='flex flex-col text-end w-1/2 pr-4'>
                    <h3 className='text-2xl p-2 text-primary-site'>{producto.precio} €</h3>
                    <p className='p-2 text-lg'>Total: <span>{producto.precio} €</span></p>
                  </div>
                </div>
                <div className='w-full h-1/3 text-end'>
                  <div className="py-4 flex justify-end px-10 gap-5">
                    <button className="bg-secondary-dark hover:bg-secondary-dark hover:text-primary-site flex gap-2 px-5 py-2 text-primary-light rounded-md shadow-md mt-3">Ver Producto</button>
                    <button 
                      className="bg-red-800 hover:bg-red-700 flex gap-2 px-5 py-2 text-primary-light rounded-md shadow-md mt-3"
                      onClick={()=>eliminarProducto(producto)}
                    >Eliminar</button>
                  </div>
                </div>
              </div>
            </li>
              )
            }
          </ul>
          <div className="flex flex-col flex-1 pt-2 p-10 h-fit">
            <h2 className='text-primary-site text-lg border-b border-b-primary-site mb-10'>Resumen</h2>
            <div className=' w-full h-full'>
              <ul className="">
                {
                  !carrito || carrito?.length === 0 ? <li>No hay productos en el carrito</li>
                  : 
                    carrito.map(producto =>
                      <li className='py-2 border-b border-primary-medium flex justify-between text-sm' key={generarId()}>
                        <div className='w-1/2'>{producto.titulo}</div>
                        <span className='text-xs text-primary-site mt-auto'>x1</span>
                        <div className='mt-auto'>{producto.precio} €</div>
                      </li>
                    )
                  }
              </ul>
              <div className='flex  justify-end gap-4 pt-8'>
                <p className="text-2xl mt-auto text-primary-site">Total: </p>
                <p className="text-2xl mt-auto">{!carrito || carrito?.length===0 ? 0 : carrito.reduce((total, prod)=> total+prod.precio, 0)}€</p>
              </div>
              <div className='flex justify-end pt-8'>
                <button className='bg-primary-site w-44 h-12 text-primary-dark text-xl font-bold tracking-wider hover:bg-primary-light uppercase'>
                  Pagar
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Carrito