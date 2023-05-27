import { generarId } from "@/helpers"

const contactInfo = [
    {
        id: generarId(),
        image: "/auriculares-1.png",
        imageDescription: "icono telefono",
        text: "999 999 999"
    },
    {
        id: generarId(),
        image: "/correo-1.png",
        imageDescription: "sobre de correo",
        text: "info@easy-gaming.com"
    },
    {
        id: generarId(),
        image: "/instagram-1.png",
        imageDescription: "icono instsagram",
        text: "ig.com/easy-gaming"
    }
]

export default contactInfo