import { useEffect, useState } from "react";
import api from "../services/axio";
import { toast } from "react-toastify";

function AddSymptom() {
  const [symptoms, setSymptoms] = useState([]);
  const [name, setName] = useState("");
  const [severity, setSeverity] = useState("mild");
  const [description, setDescription] = useState("");

  const fetchSymptoms = () => {
    api
      .get("/symptoms")
      .then((res) => {
        setSymptoms(res.data.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    fetchSymptoms();
  }, []);

  const handleAdd = (e) => {
    e.preventDefault();

    const data = {
      name,
      severity,
      description,
      date_recorded: new Date().toISOString().split("T")[0],
    };

    api
      .post("/symptoms", data)
      .then(() => {
        toast.success("Symptom added successfully");
        fetchSymptoms();
        setName("");
        setSeverity("mild");
        setDescription("");
      })
      .catch((err) => {
        console.log(err);
        toast.error("Error adding symptom");
      });
  };

  return (
    <div>
  <h1>Add Symptom</h1>

  <form onSubmit={handleAdd}>
    <label>Name</label>
    <input
      type="text"
      placeholder="Enter symptom name"
      value={name}
      onChange={(e) => setName(e.target.value)}
    />

    <label>Severity</label>
    <select
      value={severity}
      onChange={(e) => setSeverity(e.target.value)}
    >
      <option value="mild">Mild</option>
      <option value="moderate">Moderate</option>
      <option value="severe">Severe</option>
    </select>

    <label>Description</label>
    <input
      type="text"
      placeholder="Enter description"
      value={description}
      onChange={(e) => setDescription(e.target.value)}
    />

    <button type="submit">Add Symptom</button>
  </form>

  <h2 className="section-title">Symptoms List</h2>

  <div className="list">
    {symptoms.map((s) => (
      <div key={s.id} className="card">
        <h3>{s.name}</h3>
        <p><strong>Severity:</strong> {s.severity}</p>
        <p><strong>Description:</strong> {s.description}</p>
      </div>
    ))}
  </div>
</div>
  );
}

export default AddSymptom;
