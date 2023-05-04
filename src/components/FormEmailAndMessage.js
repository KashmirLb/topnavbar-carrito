import { useForm, ValidationError } from '@formspree/react';


const FormEmailAndMessage = ({formLink}) => {

    const [state, handleSubmit] = useForm(formLink);
        
    if (state.succeeded) {
        return <p>Mensaje Enviado!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-5'>
          <label htmlFor="email">
            Correo electrónico
          </label>
          <input
            id="email"
            type="email" 
            name="email"
            className='text-black p-2'
          />
          <ValidationError 
            prefix="Email" 
            field="email"
            errors={state.errors}
          />
          <label htmlFor="message">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            className='h-40 text-black p-2'
          />
          <ValidationError 
            prefix="Message" 
            field="message"
            errors={state.errors}
          />
          <button type="submit" disabled={state.submitting} className='bg-primary-site w-44 h-12 text-black text-xl font-bold tracking-wider uppercase'>
            Enviar
          </button>
        </form>
    );
}

export default FormEmailAndMessage