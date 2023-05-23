import React from 'react'
import Layout from '@/components/Layout'

const Tiendas = () => {

  return (
    <Layout page={"Tiendas"} >
      <header hidden><h1>Tiendas</h1></header>
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

export default Tiendas