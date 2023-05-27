import Layout from '@/components/Layout'
import React from 'react'
import FormEmailAndMessage from '@/components/FormEmailAndMessage';
import IconLeftTextRight from '@/components/IconLeftTextRight';
import contactInfo from '@/data/contactInfo';

const Contacto = () => {
  return (
    <Layout page={"Contacto"}>
      <header hidden><h1>Contacto</h1></header>
      <main>
        <div className='p-40 pb-32 text-primary-light md:flex gap-10'>
          <IconLeftTextRight iconText={contactInfo} />
          <div className='lg:w-2/4 w-full'>
            <FormEmailAndMessage formLink={"xwkjyovd"} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Contacto