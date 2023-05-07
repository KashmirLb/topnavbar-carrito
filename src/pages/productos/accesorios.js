import Layout from '@/components/Layout'
import ProductLayout from '@/components/ProductLayout'
import React from 'react'
import axiosClient from '@/config/axiosClient'
import { numberMaker } from '@/helpers'

const Accesorios = () => {

    const productosAccesorios = [
        {
            id: null,
            titulo: "Ratón Logitech MN",
            precio: 80,
            imagen: "/productos/accesorios/raton1.jpg",
            categoria: "accesorios",
            marca: "logitech",
            resumen: "Ratón logitech"
        },
        {
            id: null,
            titulo: "Ratón Aorus XD",
            precio: 60,
            imagen: "/productos/accesorios/raton2.jpg",
            categoria: "accesorios",
            marca: "aorus",
            resumen: "Ratón aorus normal"
        },
        {
            id: null,
            titulo: "Ratón Steelseries SD",
            precio: 75,
            imagen: "/productos/accesorios/raton3.jpg",
            categoria: "accesorios",
            marca: "Steelseries",
            resumen: "Ratón steelseries bueno"
        },
        {
            id: null,
            titulo: "Teclado IOP",
            precio: 70,
            imagen: "/productos/accesorios/teclado1.jpg",
            categoria: "accesorios",
            marca: "unknown",
            resumen: "Teclado mecánico negro"
        },
        {
            id: null,
            titulo: "Teclado FFS",
            precio: 120,
            imagen: "/productos/accesorios/teclado2.jpg",
            categoria: "accesorios",
            marca: "unknown",
            resumen: "Teclado mecánico de tacto suave"
        },
        {
            id: null,
            titulo: "Pack teclado y ratón",
            precio: 80,
            imagen: "/productos/accesorios/accesorios1.jpg",
            categoria: "accesorios",
            marca: "redragon",
            resumen: "Pack de teclado y ratón Redragon"
        }
    ]
  return (
    <Layout page={"Accesorios"}>
        <ProductLayout categoria={"Accesorios"} productos={productosAccesorios}/>
    </Layout>
  )
}


export async function getStaticProps() {
  
    let results = [];

    const tienda = "easy-gaming"

    try{
      const { data } = await axiosClient.post("productos/get-products", { tienda });

      data.data.map( product =>{

        if(product._fieldsProto?.categoria?.stringValue.toLowerCase() === "accesorios"){
          let newProduct = {
              id: product._ref?._path?.segments[product._ref?._path?.segments?.length-1] ?? null,
              titulo: product._fieldsProto?.titulo?.stringValue ?? "",
              precio: numberMaker(product._fieldsProto?.precio?.integerValue) ?? 0,
              imagen: product._fieldsProto?.imagen?.stringValue ?? "",
              categoria: product._fieldsProto?.categoria?.stringValue ?? "" ?? "",
              marca: product._fieldsProto?.marca?.stringValue ?? "" ?? "",
              resumen: product._fieldsProto?.resumen?.stringValue ?? ""
          }
          results.push(newProduct)
        }
      })

   }
    catch{
      results.push({ msg: "No hay datos" })
    }
    
  return {
    props:{
      results
    }
  }
}

export default Accesorios