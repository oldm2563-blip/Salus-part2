import api from "../services/monApi";
import { useState, useEffect } from "react";

export default function Generate_advice() {
  const [last_advice, setlast_advice] = useState("");

  const fetchAppointments = () => {
    api
      .get("/ai/last-advice")
      .then((response) => {
        if (response.data.data) {
          console.log(response.data.data);
          setlast_advice(response.data.data);
        }
      })
      .catch((err) => {
        zc;
        console.log(err.response);
      });
  };
  useEffect(() => {
    fetchAppointments();
  }, []);

  const advice = () => {
    api
      .post("/ai/health-advice")
      .then((response) => {
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    console.log("advice");
  };

  return (
    <div>
      <h1>AI Health Advice</h1>

      <div className="card advice-card">
        <button onClick={advice}>Ask AI for Advice</button>

        <div className="advice-content">
          <h3>Latest Advice</h3>
          <p className="advice-text">{last_advice.response}</p>

          <p className="date">{last_advice.generated_at}</p>
        </div>
      </div>
    </div>
  );
}
