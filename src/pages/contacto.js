import Layout from '@/components/Layout'
import Image from 'next/image'
import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import FormEmailAndMessage from '@/components/FormEmailAndMessage';
import IconLeftTextRight from '@/components/IconLeftTextRight';
import contatInfo from '@/data/contatInfo';

const Contacto = () => {
  return (
    <Layout page={"Contacto"}>
      <header hidden><h1>Contacto</h1></header>
      <main>
        <div className='p-40 pb-32 text-white md:flex gap-10'>
          <IconLeftTextRight iconText={contatInfo} />
          <div className='lg:w-2/4 w-full'>
            <FormEmailAndMessage formLink={"xwkjyovd"} />
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Contacto