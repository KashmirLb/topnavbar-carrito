import axios from "axios";

const axiosClient = axios.create({
    baseURL: `${process.env.PRODUCTOS_LINK}/api`
})

export default axiosClient