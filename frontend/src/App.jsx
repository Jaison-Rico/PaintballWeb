import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Campos from '../pages/Campos'
import Login from "../pages/Login"
import Register from "../pages/Register"
import ListarEquipos from './pages/equipos/ListarEquipos'
import ListarReservas from './pages/reservas/ListarReservas'
import PrivateRoute from '../components/PrivateRoute'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Campos' element={<Campos/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path="/listarEquipos" element={<PrivateRoute><ListarEquipos /></PrivateRoute>} />
        <Route path='/listarReservas' element={<PrivateRoute><ListarReservas /></PrivateRoute>} />

      </Routes>
      <Footer />
    </Router>

  )
}

export default App
