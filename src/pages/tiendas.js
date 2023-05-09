import React from 'react'
import Layout from '@/components/Layout'
import axiosClient from '@/config/axiosClient'
import axios from 'axios'


const Tiendas = ({results}) => {

  console.log(results)
  return (
    <Layout page={"Tiendas"} >
      <header hidden><h1>Carrito</h1></header>
      <main className="text-primary-light pt-16 px-10">
        <div className='md:w-2/3 w-full pt-5'>
          <div className='border-solid border border-primary-site p-5'> 
            filter component 

          </div> 
        </div>
        <div className='md:w-2/3 w-full border-solid border border-primary-site p-5 h-96 my-10'> map component </div>
        <div className='md:w-2/3 w-full border-solid border border-primary-site p-5 h-96 my-10'>
          selected store details
        </div>
      </main>
    </Layout>
  )
}

export async function getServerSideProps() {
  
  let results = [];

  try{
    const { data } = await axiosClient.get("/productos/get-connection")

   
    results.push(data)

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

export default Tiendas