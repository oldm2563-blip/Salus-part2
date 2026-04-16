import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import Generate_advice from "./pages/Generate_advice";
import List_appointments from "./pages/List_appointments";
import Create_appointments from "./pages/Create_appointments";
import Advice_history from "./pages/Advice_history";
import Doctors from "./pages/Doctors";
import DoctorDeatail from "./pages/DoctorDetailPage";
import Search from "./pages/Search";
import Dash from "./pages/Dash";
import ManageDoctors from "./pages/ManageDoctors";
import SymptomList from "./pages/SymptomList";
import AddSymptom from "./pages/AddSymptom";
import { useState } from "react";

function App() {
  const [iAuth, setIAuth] = useState(() => {
    const auth = localStorage.getItem("token");
    return JSON.parse(auth) || ""
  })
  const isAuth = JSON.parse(localStorage.getItem("token"));
  return (
    <>
      
      <BrowserRouter>
        {iAuth ? <ManageDoctors /> : null}
        <Routes>
          <Route
            path="/login"
            element={iAuth ? <Navigate to="/Dashboard" /> : <Login setIAuth={setIAuth} />}
          />
          <Route
            path="/Register"
            element={iAuth ? <Navigate to="/Dashboard" /> : <Register />}
          />

          <Route element={<ProtectedRoutes />}>
            <Route path="/Dashboard" element={<Dashboard />} />
            <Route path="/Generate_advice" element={<Generate_advice />} />
            <Route path="/appointments" element={<List_appointments />} />
            <Route
              path="/Create_appointments"
              element={<Create_appointments />}
            />
            <Route path="/Advice_history" element={<Advice_history />} />
            <Route path="/" element={<Dash />} />
            <Route path="/doctors" element={<Doctors />} />
            <Route path="/doctors/:id" element={<DoctorDeatail />} />
            <Route path="/search" element={<Search />} />
            <Route path="/SymptomList" element={<SymptomList />} />
            <Route path="/AddSymptom" element={<AddSymptom />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
