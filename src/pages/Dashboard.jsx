import { useEffect, useState } from "react";
import { profile } from "../services/authService";
import api from "../services/monApi";
import axio from "../services/axio.js";

function Dashboard() {
  const [appointments, setAppointments] = useState([]);

  const fetchAppointments = () => {
    api
      .get("/appointments")
      .then((response) => {
        setAppointments(response.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    fetchAppointments();
  }, []);
  const [symptoms, setSymptoms] = useState([]);

  const fetchSymptoms = () => {
    axio
      .get("/symptoms")
      .then((res) => {
        setSymptoms(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const [name, setName] = useState("");
  const token = JSON.parse(localStorage.getItem("token"));
  useEffect(() => {
    profile(token).then((response) => {
      setName(response.data.data.name);
      console.log(response.data);
    });
  }, []);
  return (
    <>
       <h1>Welcome back {name}</h1>

  <div className="stats">
    <div className="stat-card">
      <h3>Total appointments</h3>
      <p>{appointments.length}</p>
    </div>

    <div className="stat-card">
      <h3>Total symptoms</h3>
      <p>{symptoms.length}</p>
    </div>
  </div>
    </>
  );
}

export default Dashboard;
