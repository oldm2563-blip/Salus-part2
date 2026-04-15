import api from "../services/monApi"
import {useState, useEffect } from "react"


export default function Advice_history(){
const [Advice_history , setAdvice_history] = useState([]);

const fetchAdvice_history = () => 
    {   api.get("/ai/history").then(response => { 
        setAdvice_history(response.data.data)
        }
        ).catch( err => { 
        console.log(err.response.data.message)}
)
}
useEffect(()=> {
     fetchAdvice_history();
},[])




    return(
        <>
    {Advice_history.length > 0 ?
        (Advice_history.map((Advice,i)=>
           <li key={i}>
               <p>{Advice.response}</p>
               <p>{Advice.generated_at}</p>
           </li>
        )) :
         <p>empty</p>
        }
    
    </>
    )
}