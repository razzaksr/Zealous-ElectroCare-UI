import axios from "axios"

// const backend = "http://localhost:8081/api"
const backend = "http://12e1-2405-201-e023-a075-9d8d-8a4c-f53f-e20e.ngrok-free.app/api"
const logged = localStorage.getItem("logged")

export const fetchOneService = async(id) => {
    const data = await axios.get(`${backend}/services/${id}`,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const fetchServices = async() =>{
    console.log(`fetch will call ${backend}/services/`)
    const data = await axios.get(`${backend}/services/`)
    console.log(data.data)
    return data.data
}

export const bookings = async(object) => {
    const data = await axios.post(`${backend}/bookings/conform`,object,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const viewBookings = async(user) => {
    const data = await axios.get(`${backend}/bookings/by/${user}`,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const closeBooking = async(book) =>{
    const data = await axios.put(`${backend}/bookings/update`,book,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const getInvocieByBookingId = async(booking) =>{
    const data = await axios.get(`${backend}/invoices/${booking}`,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const getBookingById = async(id) =>{
    const data = await axios.get(`${backend}/bookings/${id}`,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const rateTechnician = async(tech,rate) =>{
    const data = await axios.put(`${backend}/technicians/rate/${tech}/${rate}`,null,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const findNearElectricians = async(lat,log) =>{
    const data = await axios.get(`${backend}/technicians/near/${lat}/${log}`,{
        headers:{
            Authorization: `Bearer ${logged}`
        }
    })
    return data.data
}

export const callSignUp = async(object) => {
    const data = await axios.post(`${backend}/auth/signup`,object)
    return data.data
}

export const callLogin = async(object) => {
    const data = await axios.post(`${backend}/auth/login`,object)
    return data.data
}