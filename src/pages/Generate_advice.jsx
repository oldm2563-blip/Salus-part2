import api from '../services/monApi';
import { useState , useEffect } from 'react';

export default function Generate_advice(){
const [last_advice,setlast_advice] = useState("");



const fetchAppointments = () => {
api.get("/ai/last-advice").then(response => {
    if(response.data.data){
        console.log(response.data.data)
     setlast_advice(response.data.data)
    }
     
}).catch(err => {zc
          console.log(err.response)
})
}
useEffect(()=> {
     fetchAppointments();
},[])



 const advice = () => {
    api.post("/ai/health-advice").then(response => {
            console.log(response.data)
    }).catch( err => {
        console.log(err.response);
    })
     console.log("advice");
 }
    
    return(
        <>
        <button onClick={advice}>Aske Ai for advice</button>
         <p>AI advice:</p><p>{last_advice.response}</p>
         <p>generated_at:</p><p>{last_advice.generated_at}</p>
        
        </>
    )
}