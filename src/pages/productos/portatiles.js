import React from 'react'
import Layout from '@/components/Layout'
import ProductLayout from '@/components/ProductLayout'

const Portatiles = () => {

    const productosPortatiles = [
        {
            id: null,
            titulo: "Asus XCV",
            precio: 500,
            imagen: "/productos/portatiles/portatil1.jpg",
            categoria: "portatiles",
            marca: "asus",
            resumen: "Portatil asus decente"
        },
        {
            id: null,
            titulo: "Acer YUI",
            precio: 385,
            imagen: "/productos/portatiles/portatil2.jpg",
            categoria: "portatiles",
            marca: "acer",
            resumen: "Portatil acer básico"
        },
        {
            id: null,
            titulo: "Toshiba GJK",
            precio: 700,
            imagen: "/productos/portatiles/portatil3.jpg",
            categoria: "portatiles",
            marca: "toshiba",
            resumen: "Portatil toshiba muy potente"
        },
        {
            id: null,
            titulo: "MSI KHG",
            precio: 1100,
            imagen: "/productos/portatiles/portatil4.jpg",
            categoria: "portatiles",
            marca: "MSI",
            resumen: "Portatil msi, lo mejor del mercado actual"
        }
    ]

  return (
    <Layout page={"Portátiles"}>
        <ProductLayout categoria={"Portátiles"} productos={productosPortatiles}/>
    </Layout>
  )
}

export default Portatiles