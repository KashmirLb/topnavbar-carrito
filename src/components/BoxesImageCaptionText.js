import { generarId } from '@/helpers'
import Image from 'next/image'

const BoxesImageCaptionText = ({boxes}) => {

    /**
     * image 
     * imageDescription
     * caption
     * text
     */
  return (
    <section className='md:p-24 md:flex justify-center gap-24 text-center'>
        {
            !boxes || boxes.length==0 ? <div></div> :
                boxes.map(box=>
                    <div className='flex flex-col gap-8 md:mb-0 mb-1 w-96 min-w-min bg-secondary-dark p-10 pt-0' key={generarId()}>
                        <div className='h-56 flex'>
                            <Image src={box.image} height={150} width={150} className='m-auto max-h-40 w-auto' alt={box.imageDescription} />
                        </div>
                        <span className='text-xl'>{box.caption}</span>
                        <p>{box.text}</p>
                    </div>
                )
        }
      </section>
  )
}

export default BoxesImageCaptionText