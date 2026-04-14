import { useEffect, useState } from "react";
import api from "../services/api.js";
function SymptomList(){
const [symptoms, setSymptoms] = useState([]);

useEffect(() => {
  api.get("/symptoms")
    .then(res => {
      console.log(res.data);
      setSymptoms(res.data.data);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

return (
    <div>
        <h1>Symptoms</h1>

        {symptoms.map((s) => (
            <div key={s.id}>
                <h3>{s.name}</h3>
                <p>{s.severity}</p>
            </div>
        ))}
    </div>
);
}
export default SymptomList;