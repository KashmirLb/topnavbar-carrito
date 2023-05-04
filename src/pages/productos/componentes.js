import React from 'react'
import Layout from '@/components/Layout'
import ProductLayout from '@/components/ProductLayout'

const Componentes = () => {

    const productosComponentes = [
        {
            id: null,
            titulo: "CPU i5",
            precio: 500,
            imagen: "/productos/componentes/cpu1.jpg",
            categoria: "componentes",
            marca: "Intel",
            resumen: "CPU intel i5"
        },
        {
            id: null,
            titulo: "CPU i7",
            precio: 700,
            imagen: "/productos/componentes/cpu2.jpg",
            categoria: "componentes",
            marca: "Intel",
            resumen: "CPU intel i7"
        },
        {
            id: null,
            titulo: "Tarjeta Gráfica GTX 1080",
            precio: 1000,
            imagen: "/productos/componentes/gpu1.jpg",
            categoria: "componentes",
            marca: "nVidia",
            resumen: "Tarjeta gráfica más potente actualmente"
        },
        {
            id: null,
            titulo: "Tarjeta Gráfica Gallardo",
            precio: 600,
            imagen: "/productos/componentes/gpu2.jpg",
            categoria: "componentes",
            marca: "nVidia",
            resumen: "Tarjeta grafica Gallardo"
        }
       ]

  return (
    <Layout page={"Componentes"}>
        <ProductLayout categoria={"Componentes"} productos={productosComponentes}/>
    </Layout>
  )
}

export default Componentes