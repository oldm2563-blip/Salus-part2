import { useState } from "react";
import api from "../services/api";
import { toast } from "react-toastify";

function EditSymptom({symptom, onSuccess}) {
  const [name, setName] = useState(symptom.name);
  const [severity, setSeverity] = useState(symptom.severity);
  const [description, setDescription] = useState(symptom.description);

  const handleUpdate = (e) => {
  e.preventDefault();

  const data = {
    name,
    severity,
    description,
    date_recorded: symptom.date_recorded
  };

  api.put(`/symptoms/${symptom.id}`, data)
    .then(() => {
      toast.success("Updated successfully");
      onSuccess();
    })
    .catch((err) => {
      console.log(err);
      toast.error("Update failed");
    });
};

  return (
    <form onSubmit={handleUpdate}>
      <h3>Edit Symptom</h3>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <select
        value={severity}
        onChange={(e) => setSeverity(e.target.value)}
      >
        <option value="mild">Mild</option>
        <option value="moderate">Moderate</option>
        <option value="severe">Severe</option>
      </select>

      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button type="submit">Update</button>
    </form>
  );
}

export default EditSymptom;