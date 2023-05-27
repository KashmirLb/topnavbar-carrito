import { generarId } from "@/helpers"

const linksImageCaption = [
    {
        id: generarId(),
        link: "/productos/portatiles",
        image: "/portatil-2.png",
        imageDescription: "portátil gris",
        caption: "Ordenadores Portátiles"
    },
    {
        id: generarId(),
        link: "/productos/ordenadores-mesa",
        image: "/ordenador-mesa-2.png",
        imageDescription: "ordenador de mesa iluminado en verde",
        caption: "Ordenadores de Mesa"
    },
    {
        id: generarId(),
        link: "/productos/componentes",
        image: "/tarjeta-grafica-2.png",
        imageDescription: "tarjeta gráfica",
        caption: "Componentes"
    },
    {
        id: generarId(),
        link: "/productos/accesorios",
        image: "/accesorios-2.png",
        imageDescription: "teclado con ratón",
        caption: "Accesorios"
    }
]

export default linksImageCaption