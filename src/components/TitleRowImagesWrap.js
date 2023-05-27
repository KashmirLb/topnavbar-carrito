import Image from 'next/image'

const TitleRowImagesWrap = ({titleImages}) => {

  const { title, images } = titleImages
  /**
   * 
   * Sección que debe introducirse en el <main> de la página.
   * 
   ***
   * 
   * @param titleImages: {
   * 
   * title
   * images[]: {
   *            id
   *            image
   *            imageDescription
   *            }
   * }
   */
  return (
    <section className='md:px-80 px-10 py-24'>
        <h2 className='text-4xl text-center'>{title}</h2>
        <div className='flex flex-wrap gap-10'>
          {
            !images || images.length==0 ? <div></div> :
              images.map(image =>
                <Image src={image.image} height={150} width={150} className='mx-auto my-2' alt={image.imageDescription} key={image.id}/>
                )
          }
        </div>
      </section>
  )
}

export default TitleRowImagesWrap