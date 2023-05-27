import Image from 'next/image'

const IconLeftTextRight = ({iconText}) => {

    /** 
     * 
     * Debe situarse en un cuadro fijo, del que ocupará 1/4 del ancho.
     * 
     ***
     *
     * @param iconText[]: {
     * 
     * id
     * image
     * imageDescription
     * Text
     * 
     * }
     */
  return (
    <div className='lg:w-1/4 w-full'>
        { 
            !iconText || iconText.length ==0 ? <div></div> :
                iconText.map(item=>
                    <div className='flex align-middle gap-5 mb-10' key={item.id}>
                        <Image src={item.image} height={40} width={40} alt={item.imageDescription} className='h-auto'/>
                        <p className='my-auto'>{item.text}</p>
                    </div>
                )
        }
    </div>
  )
}

export default IconLeftTextRight