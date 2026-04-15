import { useEffect, useState } from "react"
import api from "../services/monApi"
export default function Create_appointments(){
  
const [date , setDate] = useState("");
const [status , setStatus] = useState("");
const [doctors , setDoctors] = useState([]);
const [doctors_id , setDoctors_id] = useState([]);
const [message , setMessage] = useState("");



useEffect(() => {
api.get("/doctors").then(response => {
    setDoctors(response.data.data)
})
},[])


const submit = ((e)=>{
    e.preventDefault()
    api.post("/appointments",{
        appointment_date: date,
        status: status,
        doctor_id: doctors_id,
    }).then(response => {
        setMessage(response.data.message)
        setDate("")
        setStatus("")
        setDoctors_id("")
    }).catch(err => {
        if(err.response.data){
        console.log(err.response.data)
        }else if(err.response.error){
        console.log(err.response.data.error)
        }
    })
})



    return(
        <>
        <form onSubmit={submit}>
            <input type="date" value={date} onChange={(e)=> setDate(e.target.value)} required/>
            <select value={status} onChange={(e)=> setStatus(e.target.value)} required>
                <option value={""}>status</option>
                <option value={"pending"}>pending</option>
                <option value={"confirmed"}>confirmed</option>
            </select>
            <select value={doctors_id} onChange={(e) => setDoctors_id(e.target.value)}>
                <option value={""}>select doctor</option>
                {doctors.length > 0 ? 
                 (doctors.map((doctor,i) => (
                      <option value={doctor.id} key={i} >{doctor.name+" "+ doctor.specialty+" "+doctor.city }</option>
                 ))) : <option value={""}>empty</option>
                }
            </select>
            <input type="submit"/>
        </form>
        {message && (
           <p>{message}</p>
         )}
        </>
    )
}