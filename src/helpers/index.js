export const generarId = () =>{
    const random = Math.random().toString(36).substring(2)
    const randomDate= Date.now().toString()
    return random+randomDate
}

export const formatDate = date => {
    const newDate = new Date(date)

    const options = {
       
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false
    }
    return newDate.toLocaleDateString('en-EN', options).substring(0,1).toLocaleUpperCase() + newDate.toLocaleDateString('en-EN', options).substring(1)
}
