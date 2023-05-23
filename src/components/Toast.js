import useData from "@/Hooks/useData"
import { generarId } from "@/helpers"

const Toast = () => {

    const { toasts } = useData()

    console.log(toasts)

  return (
    <div className='toast-box'>
        { 
            toasts.map(toast =>(
                <div className="toast-item" key={generarId()}>
                    {toast}
                </div>
            ))
        }
    </div>
  )
}

export default Toast