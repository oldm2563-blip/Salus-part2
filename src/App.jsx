
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  const isAuth = JSON.parse(localStorage.getItem('token'))
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={isAuth ? <Navigate to='/Dashboard'/> : <Login />} />
          <Route path="/Register" element={isAuth ? <Navigate to='/Dashboard'/> : <Register />} />

          <Route element={<ProtectedRoutes/>}>
              <Route path="/Dashboard" element={<Dashboard />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

