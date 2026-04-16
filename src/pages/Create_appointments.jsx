import { useEffect, useState } from "react";
import api from "../services/monApi";
export default function Create_appointments() {
  const [date, setDate] = useState("");
  const [status, setStatus] = useState("");
  const [doctors, setDoctors] = useState([]);
  const [doctors_id, setDoctors_id] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    api.get("/doctors").then((response) => {
      setDoctors(response.data.data);
    });
  }, []);

  const submit = (e) => {
    e.preventDefault();
    api
      .post("/appointments", {
        appointment_date: date,
        status: status,
        doctor_id: doctors_id,
      })
      .then((response) => {
        setMessage(response.data.message);
        setDate("");
        setStatus("");
        setDoctors_id("");
      })
      .catch((err) => {
        if (err.response.data) {
          console.log(err.response.data);
        } else if (err.response.error) {
          console.log(err.response.data.error);
        }
      });
  };

  return (
    <div>
      <h1>Create Appointment</h1>

      <form onSubmit={submit}>
        <label>Date</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
        />

        <label>Status</label>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <option value="">Select status</option>
          <option value="pending">Pending</option>
          <option value="confirmed">Confirmed</option>
        </select>

        <label>Doctor</label>
        <select
          value={doctors_id}
          onChange={(e) => setDoctors_id(e.target.value)}
        >
          <option value="">Select doctor</option>
          {doctors.map((doctor) => (
            <option key={doctor.id} value={doctor.id}>
              {doctor.name} - {doctor.specialty} - {doctor.city}
            </option>
          ))}
        </select>

        <button type="submit">Create Appointment</button>
      </form>

      {message && <p className="success">{message}</p>}
    </div>
  );
}
