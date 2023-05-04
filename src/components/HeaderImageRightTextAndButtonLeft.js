import React from 'react'
import Image
 from 'next/image'
const HeaderImageRightTextAndButtonLeft = ({headerItems}) => {

    const { text, buttonText, image, imageDescription} = headerItems

  return (
    <header className='h-screen flex flex-col-reverse justify-start md:flex-row'>
      <div className='md:w-2/5 md:h-full h-1/2 md:pt-0 pt-10 md:flex flex-col align-middle justify-center pl-16'>
        <h1 className='text-4xl font-semibold py-10 tracking-wide text-white'>
          {text}
        </h1>
        <button className='bg-primary-site hover:bg-white w-64 h-16 text-black text-3xl font-bold tracking-wider uppercase'>
          {buttonText}
        </button>
      </div>
      <div className='md:w-3/5 md:h-full h-1/2 md:pr-10'>
        <div className='relative h-full'>
          <Image 
            src={image}
            fill 
            style={{objectFit: "contain"}} 
            alt={imageDescription}
            priority
            sizes="(width: 1652px) 951px,
                    (width: 1200px) 670px,
                    (width: 800px) 430px,
                    (width: 680px) 663px"
          />
        </div>
      </div>
     </header>
  )
}

export default HeaderImageRightTextAndButtonLeft