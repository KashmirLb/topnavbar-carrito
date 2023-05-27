import { generarId,formatDate } from "@/helpers"

const userComments = [
    {
        id: generarId(),
        user: "Usuario 1",
        avatar: "/usuario-1.png",
        comment: `Comentario del usuario 1, Comentario del usuario 1, Comentario del usuario 1, 
        Comentario del usuario 1, Comentario del usuario 1, Comentario del usuario 1, 
        Comentario del usuario 1, Comentario del usuario 1, `,
        date: formatDate(Date.now())
    },
    {
        id: generarId(),
        user: "Usuario 2",
        avatar: "/usuario-1.png",
        comment: `Comentario del usuario 2, Comentario del usuario 2, Comentario del usuario 2, 
        Comentario del usuario 2, Comentario del usuario 2, Comentario del usuario 2, 
        Comentario del usuario 2, Comentario del usuario 2, `,
        date: formatDate(Date.now())
    },
    {
        id: generarId(),
        user: "Usuario 3",
        avatar: "/usuario-1.png",
        comment: `Comentario del usuario 3, Comentario del usuario 3, Comentario del usuario 3, 
        Comentario del usuario 3, Comentario del usuario 3, Comentario del usuario 3, 
        Comentario del usuario 3, Comentario del usuario 3, `,
        date: formatDate(Date.now())
    },
    {
        id: generarId(),
        user: "Usuario 4",
        avatar: "/usuario-1.png",
        comment: `Comentario del usuario 4, Comentario del usuario 4, Comentario del usuario 4, 
        Comentario del usuario 4, Comentario del usuario 4, Comentario del usuario 4, 
        Comentario del usuario 4, Comentario del usuario 4, `,
        date: formatDate(Date.now())
    },
    {
        id: generarId(),
        user: "Usuario 5",
        avatar: "/usuario-1.png",
        comment: `Comentario del usuario 5, Comentario del usuario 5, Comentario del usuario 5, 
        Comentario del usuario 5, Comentario del usuario 5, Comentario del usuario 5, 
        Comentario del usuario 5, Comentario del usuario 5, `,
        date: formatDate(Date.now())
    }
]

export default userComments