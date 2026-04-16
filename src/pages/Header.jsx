import { BrowserRouter, Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Header({setIAuth} ) {

const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("token");
    setIAuth(false);
    navigate('/login')
  }

  return (

  <nav className="navbar">
    <div className="nav-left">
      <Link to="/Dashboard" className="logo">HealthApp</Link>

      <div className="nav-links">
        <Link to="/doctors">Doctors</Link>
        <Link to="/search">Search</Link>
        <Link to="/SymptomList">Symptoms</Link>
        <Link to="/AddSymptom">Add</Link>
        <Link to="/Advice_history">History</Link>
        <Link to="/Generate_advice">AI</Link>
        <Link to="/Create_appointments">Create</Link>
        <Link to="/appointments">Appointments</Link>
      </div>
    </div>

    <button onClick={logout} className="logout-btn">
      Logout
    </button>
  </nav>

  );
}
export default Header;
