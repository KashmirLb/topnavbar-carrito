import Image from 'next/image'
import React from 'react'

const HeaderHalfImageRightTextAndTwoButtonsLeft = ({headerItems}) => {

    const { text, firstButton, secondButton, image, imageDescription } = headerItems

  return (
    <header className='flex flex-col-reverse justify-start md:flex-row h-half-screen'>
      <div className='md:w-2/5 md:h-full md:pt-0 pt-10 md:flex flex-col align-middle justify-around pl-32'>
        <h1 className='text-4xl font-semibold py-10 tracking-wide text-primary-light'>
          {text}
        </h1>
        <p className='text-primary-light md:mb-0 mb-5'>
          <button className='border py-3 px-5 mr-5 mb-5 hover:text-primary-site hover:border-primary-site'> {firstButton} </button>
          <button className='border py-3 px-5 hover:text-primary-site hover:border-primary-site'> {secondButton} </button>
        </p>
      </div>
      <div className='w-full h-full'>
        <div className='relative h-full'>
          <Image 
            src={image}
            fill 
            style={{objectFit: "cover"}} 
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

export default HeaderHalfImageRightTextAndTwoButtonsLeft