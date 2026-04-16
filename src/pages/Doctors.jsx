import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Doctors(){

    const [doctors , setDoctors]= useState([]);

    useEffect(()=>{
        const token = JSON.parse(localStorage.getItem("token"))

        axios.get('http://16.171.43.223/api/doctors' ,{
            headers:{
                Authorization: 'Bearer '+ token
            }
        })
        .then((response)=>{
            setDoctors(response.data.data)
        }).catch(err =>{
            if(err.response){
                console.log(err.response.data);
            }
        })
    },[])

    return(
    <div>

        <h1>Doctors List</h1>

        {doctors.map(function(doctor){
            return (
                <div key={doctor.id}>
                    <Link to={'/doctors/'+ doctor.id}>
                    <p><strong>{doctor.name}</strong></p>
                    </Link>
                </div>
            )
        })}



    </div>);
}
export default Doctors