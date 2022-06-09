import './App.css'
import { Routes, Route, useLocation } from 'react-router-dom'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import Navbar from './components/Navbar/Navbar'
import Carrito from './pages/Carrito/Carrito'
import LoginFormAdmin from './pages/Admin/pure/LoginFormAdmin'
import AdminPages from './pages/Admin/AdminPages'

function App () {
  const { pathname } = useLocation()

  return (
    <div className='App'>
      {pathname !== '/login' && pathname !== '/register' && <Navbar />}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/carrito' element={<Carrito />} />
        <Route path='/admin/login' element={<LoginFormAdmin />} />
        <Route path='/admin/dashboard' element={<AdminPages />} />
      </Routes>
    </div>
  )
}

export default App
