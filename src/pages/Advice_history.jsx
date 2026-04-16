import api from "../services/monApi";
import { useState, useEffect } from "react";

export default function Advice_history() {
  const [Advice_history, setAdvice_history] = useState([]);

  const fetchAdvice_history = () => {
    api
      .get("/ai/history")
      .then((response) => {
        setAdvice_history(response.data.data);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  };
  useEffect(() => {
    fetchAdvice_history();
  }, []);

  return (
    <div>
      <h1>Advice History</h1>

      {Advice_history.length > 0 ? (
        <div className="list">
          {Advice_history.map((Advice, i) => (
            <div key={i} className="card">
              <p>{Advice.response}</p>
              <p className="date">{Advice.generated_at}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="empty">No history available</p>
      )}
    </div>
  );
}
