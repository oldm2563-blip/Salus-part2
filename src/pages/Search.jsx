import axios from "axios";
import { useState } from "react";



function Search() {


  const [doctors, setDoctors] = useState([]);
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");



const handelsearch = () => {
  
    const token = localStorage.getItem("token");

    axios
      .get('http://16.171.43.223/api/doctors/search', {
        headers: {
          Authorization: "Bearer " + token,
        },
        params: {
            city: city,
            specialty:specialty,
        },
      })
      .then(function(response){
        setDoctors(response.data.doctors)
      }).catch(function(error){
        console.log(error);

      }
      );
  };


  function setcity(e){
    setCity(e.target.value);
  }

  function setspecialty(e){
     setSpecialty(e.target.value);
  }


  return (
    <>
      <input type="text"
       placeholder="search by city" 
        value={city}
        onChange={setcity}
        />
      <input type="text" 
      placeholder="search by spiciality" 
      value={specialty}
      onChange={setspecialty}/>

      <button onClick={handelsearch}>search</button>

     {doctors.map((doctor)=> (
        <div key={doctor.id}> 
        <p>Name: {doctor.name}</p>
        <p>Speciality: {doctor.specialty}</p>
        <p>City: {doctor.city}</p>
        </div>
        ))}
      
    </>
  );
}
export default Search;
