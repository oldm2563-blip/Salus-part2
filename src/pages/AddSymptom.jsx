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
      <h1>Symptoms</h1>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Add</button>
      </form>

      {symptoms.map((s) => (
        <div key={s.id}>
          <h3>{s.name}</h3>
          <p>{s.severity}</p>
          <p>{s.description}</p>
        </div>
      ))}
    </div>
  );
}

export default AddSymptom;
