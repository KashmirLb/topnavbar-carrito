import axios from "axios";
/**
 * 
 * Instalar axios previamente:
 * npm i axios
 * 
 * Agregar funciones según componente funcional a usar.
 * 
 * 
 */

export const headerConfig = token =>{
    return(
        {
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${token}`
            }
        }
    )
}

// EJEMPLO:
/*
export const axiosProductos = axios.create({
    baseURL: `${process.env.PRODUCTOS_LINK}/api`
})
*/