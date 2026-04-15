import api from "../services/api";
import { toast } from "react-toastify";

function DeleteSymptom({id, onSuccess}) {

  const handleDelete = () => {
  const confirmDelete = window.confirm("Are you sure?");

  if (!confirmDelete) return;

  api.delete(`/symptoms/${id}`)
    .then(() => {
      toast.success("Deleted successfully");
      onSuccess();
    })
    .catch(err => console.log(err));
};

  return (
    <button onClick={handleDelete} style={{ color: "red" }}>
      Delete
    </button>
  );
}

export default DeleteSymptom;