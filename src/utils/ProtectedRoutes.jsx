import { useState } from "react"
import { Navigate, Outlet } from "react-router-dom"

const ProtectedRoutes = () => {
    const [token, setToken] = useState(() => {
        const tken = localStorage.getItem('token');
        return JSON.parse(tken) || ""
    });
    
    return token ? <Outlet/> : <Navigate to="/Login"/>
}

export default ProtectedRoutes