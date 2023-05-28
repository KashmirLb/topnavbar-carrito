import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import NavBarLinksAndCart from './NavBarLinksAndCart'
import { carritoLink, navLinks } from '@/data/navLinks'

const Layout = ({children, page}) => {

    const [ menuShows, setMenuShows ] = useState(true)

    useEffect(()=>{
        window.onscroll = function(e) {
            setMenuShows(this.oldScroll > this.scrollY)
            this.oldScroll = this.scrollY
        }
    },[])
    
    const pageTitle = `Easy-Gaming - ${page}`

  return (
    <div className="layout-component bg-background-site flex flex-col justify-between">
        <div>
            <Head>
                <title>{pageTitle}</title>
                <meta name="description" content="Easy-gaming tech store" />
                <link rel="icon" href="/easy-gaming-icon-black.png" />
            </Head>

            <div className="logo-container" onClick={()=>setMenuShows(currentMenu=> !currentMenu)}> 
                { /* LOGO IMAGE HERE */ }
            </div>

                <NavBarLinksAndCart links={navLinks} cart={carritoLink} menuShows={menuShows} currentPage={page}/>

            <div className='page-container'>
                {children}
            </div>
        </div>
        <footer className='text-primary-light bg-secondary-dark p-10 flex justify-center relative'>
            <div className='footer-container flex gap-24 justify-center'>
            <div>
                <h4 className='text-lg underline-offset-8 underline text-primary-site'>Información de la empresa</h4>
                <ul className='p-5 pl-0'>
                    { /* INFORMACIÓN DE LA EMPRESASA AQUI <li></li> */ }
                </ul>
            </div>
            <div>
                <h4 className='text-lg underline-offset-8 underline text-primary-site'>Enlaces de la página</h4>
                <ul className='p-5 pl-0'>

                    { !navLinks ||navLinks.length===0 ? <div></div>
                    :
                        navLinks.map(link =>(
                            <Link href={link.link} className='hover:text-primary-site hover:cursor-pointer block' key={link.id}>{link.text}</Link>
                        ))
                    }
                </ul>
            </div>
            <div className='absolute bottom-3 right-12 text-primary-light'>
                Kashmir Lub
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout