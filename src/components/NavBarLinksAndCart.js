import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { generarId } from '@/helpers'

const NavBarLinksAndCart = ({links, cart, currentPage}) => {


    /**
     * links: link, page, text
     * cart: link, page, image, imageDescription
     */

  return (
    <nav className="text-primary-light no-underline visited:text-primary-light flex w-4/5 justify-around">
        {
            !links || links.length==0 ? <div></div> :
                links.map(link =>
                    
                    <Link href={link.link} className={currentPage===link.page ? 'active-link' : ""} key={generarId()}>{link.text}</Link>
                    
                    
                    )
        }
        {
            !cart ? null : (
                <Link href={cart?.link} className={currentPage===cart?.page ? 'active-cart' : ""}>
                    <Image src={cart?.image} height={30} width={30} alt={cart?.imageDescription}/>
                </Link>
            )
        }
    </nav>
  )
}

export default NavBarLinksAndCart