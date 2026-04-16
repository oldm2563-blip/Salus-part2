import { useEffect, useState } from "react";
import api from "../services/api.js";
import EditSymptom from "./EditSymptom";
import DeleteSymptom from "./DeleteSymptom";

function SymptomList() {
  const [symptoms, setSymptoms] = useState([]);
  const [editingSymptom, setEditingSymptom] = useState(null);

  const fetchSymptoms = () => {
    api.get("/symptoms")
      .then(res => {
        setSymptoms(res.data.data);
      })
      .catch(err => {
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

      
      {symptoms.map((s) => (
        <div key={s.id} style={{ border: "1px solid #ccc", margin: "10px", padding: "10px" }}>
          <h1>{s.id}</h1>
          <h3>{s.name}</h3>
          <p>{s.severity}</p>
          <p>{s.description}</p>

          
          <button onClick={() => setEditingSymptom(s)}>
            Edit
          </button>

          
          <DeleteSymptom
            id={s.id}
            onSuccess={fetchSymptoms}
          />
        </div>
      ))}
    </div>
  );
}

export default SymptomList;