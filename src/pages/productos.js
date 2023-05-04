import Layout from '@/components/Layout'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import LinkImageWithCaption from '@/components/LinkImageWithCaption'
import linksImageCaption from '@/data/linksImageCaption'
import HeaderHalfImageRightTextAndTwoButtonsLeft from '@/components/HeaderHalfImageRightTextAndTwoButtonsLeft'
import productosHeader from '@/data/productosHeader'

const Productos = () => {
  return (
    <Layout page={"Productos"}>
      <HeaderHalfImageRightTextAndTwoButtonsLeft headerItems={productosHeader} />
     <main>
      <LinkImageWithCaption links={linksImageCaption} />      
     </main>
    </Layout>
  )
}

export default Productos