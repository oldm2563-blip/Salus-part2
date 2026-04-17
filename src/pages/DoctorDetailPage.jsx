import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DoctorDeatail() {
  const [doctor, setDoctorDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));

    axios
      .get("http://16.171.43.223/api/doctors/" + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then(function (response) {
        setDoctorDetail(response.data.data);
      });
  }, []);

  
  if (doctor === null) return <p className="loading">Loading .....</p>;

return (
  <div className="card">
    <h1>Doctor Details</h1>
    <p><strong>Name:</strong> {doctor.name}</p>
    <p><strong>Speciality:</strong> {doctor.specialty}</p>
    <p><strong>City:</strong> {doctor.city}</p>
    <p><strong>Consultation price:</strong> {doctor.consultation_price}</p>
    <p><strong>Available days:</strong> {doctor.available_days}</p>
    <p><strong>Years of experience:</strong> {doctor.yearsofexperience}</p>
  </div>
);
}
export default DoctorDeatail;
