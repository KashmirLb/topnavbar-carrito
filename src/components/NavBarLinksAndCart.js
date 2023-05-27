import Link from 'next/link'
import Image from 'next/image'

const NavBarLinksAndCart = ({links, cart, menuShows, currentPage}) => {

    /**
     * 
     * Reutilizable en Layout de las páginas. 
     * Se pueden usar un máximo de 4 enlaces.
     * El icono del carrito debe ser transparente, y se situará a la derecha del componente.
     * 
     * Debe ir acompañado del CSS agregado al final del componente.
     * 
     * @param links[]: {
     * 
     * id
     * link
     * page
     * text
     * 
     * }
     * @param cart: {
     * 
     * link
     * page
     * image
     * imageDescription
     * 
     * }
     * 
     * @param menuShows: boolean
     * True si el nav está visible
     * False si el nav está oculto
     * 
     * @param currentPage: string
     * Nombre de la pagina actual. Debe coincidir con el atributo "page" de uno de los enlaces.
     */

  return (
    <div className={`top-bar ${!menuShows ? 'bar-hidden' : ''}`}>
        <nav className="text-primary-light no-underline visited:text-primary-light flex w-4/5 justify-around">
            {
                !links || links.length==0 ? <div></div> :
                    links.map(link =>
                        <Link href={link.link} className={currentPage===link.page ? 'active-link' : ""} key={link.id}>{link.text}</Link>
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
    </div>
  )
}

export default NavBarLinksAndCart

/*
.top-bar{
  position: fixed;
  z-index: 2;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 60px;
  width: 100%;
  background: var(--primary-dark);
  transition: transform 0.3s ease-out;
}

.top-bar.bar-hidden{
  transform:translateY(-60px);
}

nav a {
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

nav a:last-child {
  background-color: var(--primary-site);
  height: 28px;
  transition: all 0.3s ease-out;
}

nav a::after{
  content:'';
  display: block;
  background: var(--primary-light);
  height: 1px;
  width: 100%;
  transform-origin: left;
  transition: transform 0.3s ease-out;
  transform: scaleX(0)
}

nav a:hover::after{
  transform: scaleX(1);
}

nav a:last-child:hover, .active-cart{
  background-color: var(--primary-light) !important;
}

.active-link::after{
  content:'';
  background: var(--primary-light);
  height: 1px;
  width: 100%;
  transform: scaleX(1);
}
 */