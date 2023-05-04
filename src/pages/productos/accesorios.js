import Layout from '@/components/Layout'
import ProductLayout from '@/components/ProductLayout'
import React from 'react'

const Accesorios = () => {

    const productosAccesorios = [
        {
            id: null,
            titulo: "Ratón Logitech MN",
            precio: 80,
            imagen: "/productos/accesorios/raton1.jpg",
            categoria: "accesorios",
            marca: "logitech",
            resumen: "Ratón logitech"
        },
        {
            id: null,
            titulo: "Ratón Aorus XD",
            precio: 60,
            imagen: "/productos/accesorios/raton2.jpg",
            categoria: "accesorios",
            marca: "aorus",
            resumen: "Ratón aorus normal"
        },
        {
            id: null,
            titulo: "Ratón Steelseries SD",
            precio: 75,
            imagen: "/productos/accesorios/raton3.jpg",
            categoria: "accesorios",
            marca: "Steelseries",
            resumen: "Ratón steelseries bueno"
        },
        {
            id: null,
            titulo: "Teclado IOP",
            precio: 70,
            imagen: "/productos/accesorios/teclado1.jpg",
            categoria: "accesorios",
            marca: "unknown",
            resumen: "Teclado mecánico negro"
        },
        {
            id: null,
            titulo: "Teclado FFS",
            precio: 120,
            imagen: "/productos/accesorios/teclado2.jpg",
            categoria: "accesorios",
            marca: "unknown",
            resumen: "Teclado mecánico de tacto suave"
        },
        {
            id: null,
            titulo: "Pack teclado y ratón",
            precio: 80,
            imagen: "/productos/accesorios/accesorios1.jpg",
            categoria: "accesorios",
            marca: "redragon",
            resumen: "Pack de teclado y ratón Redragon"
        }
    ]
  return (
    <Layout page={"Accesorios"}>
        <ProductLayout categoria={"Accesorios"} productos={productosAccesorios}/>
    </Layout>
  )
}

export default Accesorios