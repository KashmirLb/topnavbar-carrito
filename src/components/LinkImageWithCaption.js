import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { generarId } from '@/helpers'


const LinkImageWithCaption = ({links}) => {

  /**
   * link
   * image
   * imageDescription
   * caption
   */
    
  return (
    <section className='p-12 md:px-44 min-h-half-screen md:flex flex-wrap justify-center text-primary-light gap-5'>
      { !links || links.length === 0 ? <div>No hay enlaces</div>
        :
        links.map(link =>
          <Link href={link.link} className='flex flex-col gap-8 w-60 hover:text-primary-site mx-auto' key={generarId()}>
            <Image src={link.image} height={200} width={250} className='m-auto max-h-52 w-auto' alt={link.imageDescription} />
            <span className='text-center text-xl'>{link.caption}</span>
          </Link>          
          )
      }
      </section>
  )
}

export default LinkImageWithCaption