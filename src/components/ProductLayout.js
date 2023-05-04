import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useState } from 'react'
import ProductGrid from './ProductGrid'

const ProductLayout = ({categoria, productos}) => {

    const [ productList, setProductList ] = useState(productos)
    const [ searchText, setSearchText ] = useState("")
    const [ searchPriceMin, setSearchPriceMin ] = useState(0)
    const [ searchPriceMax, setSearchPriceMax ] = useState(5000)

    const route = useRouter();
    const cambiarCategoria = e =>{
        route.push(e.target.value);
    }

    const isNumberMin = e =>{
        if(Number(e.target.value) || e.target.value===""){
            setSearchPriceMin(Number(e.target.value))
        }
    }
    
    const isNumberMax = e =>{
        if(Number(e.target.value) || e.target.value===""){
            setSearchPriceMax(Number(e.target.value))
        }
    }

    const changeOrder = e => {
        if(e.target.value === "marca"){
            let sortedList = [...productList].sort((a,b) =>  a.marca.localeCompare(b.marca))
            setProductList(sortedList)
        }
        if(e.target.value === "bajo"){
            let sortedList = [...productList].sort((a,b) =>  a.precio - b.precio)
            setProductList(sortedList)
        }
        if(e.target.value === "alto"){
            let sortedList = [...productList].sort((a,b) =>  b.precio - a.precio)
            setProductList(sortedList)        }
    }

    const filteredProducts = 
    searchText == "" ? productList
        : productList.filter( producto =>
            producto.titulo.toLowerCase().includes(searchText?.toLowerCase())
            || producto.resumen.toLowerCase().includes(searchText?.toLowerCase())
            || producto.marca.toLowerCase().includes(searchText?.toLowerCase()))

    const filteredPrices = 
        filteredProducts?.filter( product =>
            searchPriceMin <= product.precio && product.precio <= searchPriceMax
            )

  return (
    <div className='p-5 pt-16 text-white remove-animation'>
        <div className=' h-10 flex align-middle px-20 justify-between'>
            <Link className='text-xl flex align-middle my-auto gap-4' href="/productos">
                <Image src="/left-arrow.png" height={15} width={15} alt="back arrow" className='my-auto' />
                 Atrás
            </Link>

            <div className='flex my-auto mr-20 text-xl gap-5'>
                <h1><span className='text-primary-site'>Categoría: </span>{categoria ? categoria : ""}</h1>
            </div>
        </div>
        <div className='bg-slate-800 h-fit py-3 mt-3 mx-16 px-4 flex flex-wrap my-auto gap-5'>
            <div className='my-auto'>
                <span className='pr-2 font-bold'>Buscar: </span>
                <input 
                    type="text" 
                    className='text-black px-2' 
                    placeholder="Marca, nombre..." 
                    value={searchText} 
                    onChange={e => setSearchText(e.target.value)}
                />
            </div>
            <div className='flex my-auto flex-wrap'>
                <span className='font-bold pr-4 my-2'>Precio: </span>
                <div className='relative my-2'>
                    <input type="text" className='text-black px-2' value={searchPriceMin} onChange={e=>isNumberMin(e)}/>
                    <span className='absolute right-1 z-10 text-slate-400'>€ min.</span>
                </div>
                <span className="px-2 my-2">-</span>
                <div className='relative my-2'>
                    <input type="text" className='text-black px-2' value={searchPriceMax} onChange={e=>isNumberMax(e)}/>
                    <span className='absolute right-1 z-10 text-slate-400'>€ max.</span>
                </div>
            </div>
            <div className='flex my-auto '>
                <span className='font-bold pr-3'>Categoría: </span>
                <select className='text-black w-44 pl-2' onChange={e => cambiarCategoria(e)} defaultValue={route.pathname}>
                    <option value="/productos/ordenadores-mesa">Ordenadores</option>
                    <option value="/productos/portatiles">Portátiles</option>
                    <option value="/productos/componentes">Componentes</option>
                    <option value="/productos/accesorios">Accesorios</option>
                </select>
            </div>
            <div className='flex my-auto '>
                <span className='font-bold pr-3'>Orden: </span>
                <select className='text-black w-44 pl-2' onChange={e=>changeOrder(e)}>
                    <option value="marca">Por marca</option>
                    <option value="bajo">Precio más bajo</option>
                    <option value="alto">Precio más alto</option>
                </select>
            </div>
        </div>
        <main className='mx-16 mt-5 p-2'>
            <ProductGrid productos={filteredPrices} />    
        </main>        
    </div>
  )
}

export default ProductLayout