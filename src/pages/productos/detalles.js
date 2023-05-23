import useData from "@/Hooks/useData"
import Layout from "@/components/Layout";
import Image from "next/image";
import { generarId } from "@/helpers";
import Toast from "@/components/Toast";


const Detalles = () => {

    const { productoSeleccionado, setCarrito, agregarToast } = useData();

    const agregarProducto = producto =>{
        let newProducto = {
            ...producto,
            id: generarId()
        }
        setCarrito(c => [...c, newProducto])
        agregarToast("Agregado a carrito")
    }

  return (
    <Layout page={"Detalles Producto"}>
        <main>
            <div className='mb-5 px-16 flex mt-16'>
            <div className='h-full flex flex-col align-middle justify-center'>
                <div className="w-full h-half-screen">
                <Image src={productoSeleccionado.imagen} height={500} width={500}  alt="portatil" className='h-full m-auto w-auto'/>
                </div>
            </div>
            <div className='h-full flex flex-1 flex-col'>
                <div className='w-full flex'>
                <div className='w-1/2 px-20'>
                    <h3 className='text-2xl p-2 text-primary-site'>{productoSeleccionado.titulo}</h3>
                </div>
                <div className='flex flex-col text-end w-1/2 pr-4'>
                    <h3 className='text-2xl p-2 text-primary-site'>{productoSeleccionado.precio} €</h3>
                </div>
                </div>
                <div className='py-4 px-20'>
                    <div className="text-primary-light h-48"> 
                        {productoSeleccionado.resumen}
                    </div>
                    <div className="">
                        <button className="bg-secondary-dark hover:bg-secondary-dark hover:text-primary-site flex gap-2 px-5 py-2 text-primary-light rounded-md shadow-md mt-3"
                            onClick={()=>agregarProducto(productoSeleccionado)}
                        >Agregar Producto</button>
                    </div>
                </div>
            </div>
        </div>
        <div > 
            <h2 className="text-primary-site text-center text-2xl titulo-caracteristicas">Características</h2>
        </div>
        </main>
        <Toast/>
    </Layout>
  )
}

export default Detalles