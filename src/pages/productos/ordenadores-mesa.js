import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductLayout from '@/components/ProductLayout'

const Ordenadores = () => {

  const productosOrdenadores = [
    {
        id:null,
        titulo: "Ordenador HUOI",
        precio: 2000,
        imagen: "/productos/ordenadores/ordenador1.jpg",
        categoria: "ordenadores",
        marca: "asus",
        resumen: "Ordenador asus potente"
    },
    {
        id:null,
        titulo: "Ordenador VNMB",
        precio: 1500,
        imagen: "/productos/ordenadores/ordenador2.jpg",
        categoria: "ordenadores",
        marca: "acer",
        resumen: "Ordenador acer bastante potente"
    },
    {
        id:null,
        titulo: "Ordenador FRW",
        precio: 900,
        imagen: "/productos/ordenadores/ordenador3.jpg",
        categoria: "ordenadores",
        marca: "HP",
        resumen: "Ordenador hp básico"
    },
    {
        id:null,
        titulo: "Ordenador KLP",
        precio: 2500,
        imagen: "/productos/ordenadores/ordenador4.jpg",
        categoria: "ordenadores",
        marca: "MSI",
        resumen: "Ordenador MSI superpotente"
    }
]

  return (
    <Layout page={"Ordenadores de Mesa"}>
      <ProductLayout categoria={"Ordenadores de Mesa"} productos={productosOrdenadores}/>
    </Layout>
  )
}

export default Ordenadores