import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function DoctorDeatail() {
  const [doctor, setDoctorDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    const token = localStorage.getItem("token");

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

  
  if (doctor === null) return <p>Loading .....</p>;

  return (
    <div>
      <h1>Details ...</h1>
      <p>Name: {doctor.name}</p>
      <p>Speciality: {doctor.specialty}</p>
      <p>City: {doctor.city}</p>
      <p>consultation_price: {doctor.consultation_price}</p>
      <p>available_days : {doctor.available_days}</p>
      <p>yearsofexperience : {doctor.yearsofexperience}</p>
    </div>
  );
}
export default DoctorDeatail;
