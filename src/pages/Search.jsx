import axios from "axios";
import { useState } from "react";

function Search() {
  const [doctors, setDoctors] = useState([]);
  const [city, setCity] = useState("");
  const [specialty, setSpecialty] = useState("");

  const handelsearch = () => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get("http://16.171.43.223/api/doctors/search", {
        headers: {
          Authorization: "Bearer " + token,
        },
        params: {
          city: city,
          specialty: specialty,
        },
      })
      .then(function (response) {
        setDoctors(response.data.doctors);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  function setcity(e) {
    setCity(e.target.value);
  }

  function setspecialty(e) {
    setSpecialty(e.target.value);
  }

  return (
    <>
      <h1>Search Doctor</h1>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by city"
          value={city}
          onChange={setcity}
        />
        <input
          type="text"
          placeholder="Search by speciality"
          value={specialty}
          onChange={setspecialty}
        />
        <button onClick={handelsearch}>Search</button>
      </div>

      <div className="list">
        {doctors.map((doctor) => (
          <div key={doctor.id} className="card">
            <p>
              <strong>Name:</strong> {doctor.name}
            </p>
            <p>
              <strong>Speciality:</strong> {doctor.specialty}
            </p>
            <p>
              <strong>City:</strong> {doctor.city}
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
export default Search;
