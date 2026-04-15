import { BrowserRouter } from "react-router-dom";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Doctors from "./Doctors";
import DoctorDeatail from "./DoctorDetailPage";
import Search from "./Search";
import Dash from "./Dash";

function ManageDoctors() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/doctors">Doctors List</Link>
        {" | "}
        <Link to="/search"> Search A Doctor</Link>
        {" | "}
        <Link to="/"> Back to Dash</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Dash/>}/>
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDeatail/>}/>
        <Route path="/search" element={<Search />}/>
      </Routes>
    </BrowserRouter>
  );
}
export default ManageDoctors;
