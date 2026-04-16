import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";


function ManageDoctors() {
  return (
      <nav>
        <Link to="/doctors">Doctors List</Link>
        {" | "}
        <Link to="/search"> Search A Doctor</Link>
        {" | "}
        <Link to="/"> Back to Dash</Link>
      </nav>
  );
}
export default ManageDoctors;
