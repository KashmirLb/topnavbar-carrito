import React from 'react'
import Image from 'next/image'
import { generarId } from '@/helpers'

const IconLeftTextRight = ({iconText}) => {

    /**  (Array)
     * image
     * imageDescription
     * Text
     */
  return (
    <div className='lg:w-1/4 w-full'>
        { 
            !iconText || iconText.length ==0 ? <div></div> :
                iconText.map(item=>
                    <div className='flex align-middle gap-5 mb-10' key={generarId()}>
                        <Image src={item.image} height={40} width={40} alt={item.imageDescription} className='h-auto'/>
                        <p className='my-auto'>{item.text}</p>
                    </div>
                )
        }
    </div>
  )
}

export default IconLeftTextRight