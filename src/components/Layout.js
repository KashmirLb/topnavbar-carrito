import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'

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
                <Image src="/easy-gaming.png" alt="easy-gaming logo" height={35} width={172}/>
            </div>
            <div className={`top-bar ${!menuShows ? 'bar-hidden' : ''}`}>
                <nav className="text-white no-underline visited:text-white flex w-4/5 justify-around">
                    <Link href="/" className={page==="Main Page" ? 'active-link' : ""}>Inicio</Link>
                    <Link href="/productos" className={page==="Productos" ? 'active-link' : ""}>Productos</Link>
                    <Link href="/tiendas" className={page==="Tiendas" ? 'active-link' : ""}>Tiendas</Link>
                    <Link href="/contacto" className={page==="Contacto" ? 'active-link' : ""}>Contacto</Link>
                    <Link href="/carrito" className={page==="Carrito" ? 'active-cart' : ""}>
                        <Image src="/grocery-store-empty.png" height={30} width={30} alt="shopping cart"/>
                    </Link>
                </nav>
            </div>
            <div className='page-container'>
                {children}
            </div>
        </div>
        <footer className='text-white bg-slate-800 p-10 flex justify-center relative'>
            <div className='footer-container flex gap-24 justify-center'>
            <div>
                <h4 className='text-lg underline-offset-8 underline text-primary-site'>Información de la empresa</h4>
                <ul className='p-5 pl-0'>
                    <li>Fascination Street, 4</li>
                    <li>Cure City</li>
                    <li>019890</li>
                    <li>info@easy-gaming.com</li>
                    <li>999 999 999</li>
                </ul>
            </div>
            <div>
                <h4 className='text-lg underline-offset-8 underline text-primary-site'>Enlaces de la página</h4>
                <ul className='p-5 pl-0'>
                    <Link href="/" className='hover:text-primary-site hover:cursor-pointer block'>Inicio</Link>
                    <Link href="/productos" className='hover:text-primary-site hover:cursor-pointer block'>Productos</Link>
                    <Link href="/tiendas" className='hover:text-primary-site hover:cursor-pointer block'>Tiendas</Link>
                    <Link href="/contacto" className='hover:text-primary-site hover:cursor-pointer block'>Contacto</Link>
                    <Link href="/carrito" className='hover:text-primary-site hover:cursor-pointer block'>Carrito</Link>
                </ul>
            </div>
            <div className='absolute bottom-3 right-12 text-white'>
                Kashmir Lub
            </div>
            </div>
        </footer>
    </div>
  )
}

export default Layout