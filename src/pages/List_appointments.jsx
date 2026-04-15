import api from "../services/monApi"
import {useState, useEffect } from "react"

export default function appointments(){
const [appointments , setAppointments] = useState([]);



const fetchAppointments = () => 
    {   api.get("/appointments").then(response => { 
        setAppointments(response.data.data)
        }
        ).catch( err => { 
        console.log(err.response.data.message)}
)
}
useEffect(()=> {
     fetchAppointments();
},[])


function Cansel_appointment(id){
        api.delete("/appointments/"+id).then(response => {
            console.log(response.data)
            fetchAppointments();
        }).catch(err => {
            console.log(err.response)
        })
        
}
    return(
        <>
        {appointments.length > 0 ?
        (appointments.map((app,i)=>
           <li key={i}>
               <p>{app.appointment_date}</p>
               <p>{app.status}</p>
                <button onClick={() => Cansel_appointment(app.id)}>Cansel</button>
           </li>
        )) :
         <p>empty</p>
        }
        </>
    )
}