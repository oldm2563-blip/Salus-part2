import { useEffect, useState } from "react";
import api from "../services/axio.js";
import EditSymptom from "./EditSymptom";
import DeleteSymptom from "./DeleteSymptom";

function SymptomList() {
  const [symptoms, setSymptoms] = useState([]);
  const [editingSymptom, setEditingSymptom] = useState(null);

  const fetchSymptoms = () => {
    api
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

  return (
    <div>
  <h1>Symptoms</h1>

  {editingSymptom && (
    <EditSymptom
      symptom={editingSymptom}
      onSuccess={() => {
        setEditingSymptom(null);
        fetchSymptoms();
      }}
    />
  )}

  <div className="list">
    {symptoms.map((s) => (
      <div key={s.id} className="card">
        <h3>{s.name}</h3>
        <p><strong>ID:</strong> {s.id}</p>
        <p><strong>Severity:</strong> {s.severity}</p>
        <p><strong>Description:</strong> {s.description}</p>

        <div className="actions">
          <button onClick={() => setEditingSymptom(s)}>Edit</button>
          <DeleteSymptom id={s.id} onSuccess={fetchSymptoms} />
        </div>
      </div>
    ))}
  </div>
</div>
  );
}

export default SymptomList;
