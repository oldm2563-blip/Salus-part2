import { useEffect, useState } from "react"
import { profile } from "../services/authService"


function Dashboard() {
    const [name, setName] = useState("");
    const token = JSON.parse(localStorage.getItem('token'))
    useEffect(() => {
        profile(token).then(response => {
        setName(response.data.data.name)    
        console.log(response.data);
    })
    }, [])
    return(
        <h1>Welcome back {name}</h1>

    )
}

export default Dashboard