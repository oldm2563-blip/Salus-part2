import { BrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";


function Header() {
  return (
    <nav>
      {" | "}
      <Link to="/Dashboard"> Home</Link>
      {" | "}
      <Link to="/doctors">Doctors List</Link>
      {" | "}
      <Link to="/search"> Search A Doctor</Link>

      {" | "}
      <Link to="/SymptomList">SymptomList List</Link>
      {" | "}
      <Link to="/AddSymptom">AddSymptom</Link>
      {" | "}
      <Link to="/Advice_history"> Advice_history</Link>
       {" | "}
      <Link to="/Generate_advice"> Generate_advice</Link>
       {" | "}
      <Link to="/Create_appointments"> Create_appointments</Link>
          {" | "}
      <Link to="/appointments"> List_appointments</Link>
    </nav>
  );
}
export default Header;
