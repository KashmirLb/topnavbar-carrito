import { generarId } from "@/helpers"

const titleAndImages = 
    {
        title: "Colaboradores",
        images: [
            {
                id: generarId(),
                image: "/circle-1.png",
                imageDescription: "Colaborador círculo"
            },
            {
                id: generarId(),
                image: "/triangle-1.png",
                imageDescription: "Colaborador triángulo"
            },
            {
                id: generarId(),
                image: "/square-1.png",
                imageDescription: "Colaborador cuadrado"
            },
            {
                id: generarId(),
                image: "/pentagon-1.png",
                imageDescription: "Colaborador pentágono"
            },
            {
                id: generarId(),
                image: "/hexagon-1.png",
                imageDescription: "Colaborador hexágono"
            },
            {
                id: generarId(),
                image: "/romboid-1.png",
                imageDescription: "Colaborador romboide"
            }
        ]
    }

export default titleAndImages