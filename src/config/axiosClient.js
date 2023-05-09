import axios from "axios";

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

export const axiosProductos = axios.create({
    baseURL: `${process.env.PRODUCTOS_LINK}/api`
})

export const axiosProductosDev = axios.create({
    baseURL: `http://localhost:4000/api`
})