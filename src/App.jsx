import SymptomList from "./pages/SymptomList.jsx";
import AddSymptom from "./pages/AddSymptom.jsx";
import { Route,BrowserRouter,Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './App.css'

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route  path="/SymptomList" element={<SymptomList />} />
      <Route  path="/AddSymptom" element={<AddSymptom />} />
    </Routes>
    </BrowserRouter>
    <ToastContainer />  
    </>
  );
}

export default App;