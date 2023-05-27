import { generarId } from "@/helpers"

export const navLinks = [
    {
        id: generarId(),
        link: "/",
        page: "Main Page",
        text: "Inicio"
    },
    {
        id: generarId(),
        link: "/productos",
        page: "Productos",
        text: "Productos"
    },
    {
        id: generarId(),
        link: "/tiendas",
        page: "Tiendas",
        text: "Tiendas"
    },
    {
        id: generarId(),
        link: "/contacto",
        page: "Contacto",
        text: "Contacto"
    }
]

export const carritoLink = {
    link: "/carrito",
    page: "Carrito",
    image: "/grocery-store-empty.png",
    imageDescription: "carrito de compra"
}