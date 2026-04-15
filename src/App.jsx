import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Create_appointments from './pages/Create_appointments';
import Advice_history from './pages/Advice_history'
import Generate_advice from './pages/Generate_advice';
import List_appointments from './pages/List_appointments';



function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/Generate_advice' element={<Generate_advice/>}/>
      <Route path='/appointments' element={<List_appointments/>}/>
      <Route path='/Create_appointments' element={<Create_appointments/>}/>
      <Route path='/Advice_history' element={<Advice_history/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
