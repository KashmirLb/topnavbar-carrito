import Layout from '@/components/Layout'
import ProductLayout from '@/components/ProductLayout'
import React from 'react'
import { axiosProductos } from '@/config/axiosClient'
import { numberMaker } from '@/helpers'

const Accesorios = () => {

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

      const salt = await bcrypt.genSalt(10)
      const cryptedKey = await bcrypt.hash(process.env.PRODUCTOS_KEY, salt)
      const { data } = await axiosProductos.post("productos/get-products", headerConfig(cryptedKey), { tienda });

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