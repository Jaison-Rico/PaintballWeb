import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Campos from '../pages/Campos'
import Login from "../pages/Login"
import Register from "../pages/Register"
import ListarEquipos from './pages/equipos/ListarEquipos'
import ListarReservas from './pages/reservas/ListarReservas'


function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Campos' element={<Campos/>} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />
        <Route path='/listarEquipos' element={<ListarEquipos />}></Route>
        <Route path='/listarReservas' element={<ListarReservas />}></Route>

      </Routes>
      <Footer />
    </Router>

  )
}

export default App
