import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from "../pages/Login"
import Register from "../pages/Register"



function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/Login' element={<Login />} />
        <Route path='/Register' element={<Register />} />

      </Routes>
      <Footer />
    </Router>
      
  )
}

export default App
